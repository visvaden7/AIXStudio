import {ChangeEvent, FormEvent, FunctionComponent, useCallback, useEffect, useMemo, useState} from "react";
import {RunnableSequence} from "@langchain/core/runnables";
import {model} from "./OpenAIModel";
import {AIMessage, HumanMessage} from "@langchain/core/messages";
import {ChatMessageHistory} from "langchain/memory";
import {ChatPromptTemplate} from "@langchain/core/prompts";
import ChatbotProfile from '../../assets/pages/project/chat.png'
import UserProfile from '../../assets/pages/project/prof_user 2.svg'
import SendBtn2 from '../../assets/pages/project/sendBtn2.svg'
import {getByteLength} from "../../utils/getByteLength.ts";
import {RenderFormatText} from "./RenderFormatText.tsx";
import {useTextFormatter} from "../../hook/useTextFormat.ts";
import {useProjectStore} from "../../store/useProjectStore.ts";

import {ChatMessage} from "../../@types/domain.ts";

interface Props {
  data: string;
  onCount: (num: number) => void
  questionCount: number;
  formatMode: string;
}

export const Chatbot: FunctionComponent<Props> = ({data, onCount, questionCount, formatMode}) => {
  
  const {updateChatMessage, updateChatFormattedTexts} = useProjectStore()
  
  const defaultMessage = [{
    role: "ai",
    content: `안녕 반가워, ${data}을 전공한 프로젝트 매니저야~~ 궁금한 거 있으면 알려줄게`
  },]
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessage);
  
  const chatHistory = useMemo(() => new ChatMessageHistory(), []);
  const ChatPromptTemplates = ChatPromptTemplate.fromMessages([
    ["system", "너는 {major} 전공을 한 전문가야. 대화 맥락에서 자기소개를 이미 했다면, 자기 소개를 다시 하지 마. 말투는 친근하게 유지하고, 두 가지 질문(너는 누구인지, 전공은 무엇인지)을 포함하되 반복하지 않도록 주의해."],
    ['system', '{history}'],
    ["user", "{text}"],
  ]);
  
  const chain = RunnableSequence.from([ChatPromptTemplates, model]);
  
  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const maxByte = 200
    if (getByteLength(e.target.value) > maxByte) {
      alert('입력자수를 넘기셨습니다.')
      return;
    }
    setInput(e.target.value)
  }, [])
  
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (messages.filter(msg => msg.role === 'user').length > questionCount) {
      setInput("");
      return;
    }
    // 사용자 메시지를 대화 기록에 추가
    await chatHistory.addMessage(new HumanMessage(input));
    const historyMessages = await chatHistory.getMessages()
    
    const userInput = {
      text: input,
      major: data,
      history: historyMessages
    };
    // 체인을 통해 응답 생성
    const response = await chain.invoke(userInput);
    
    // AI 응답을 대화 기록에 추가
    const aiMessageContent = typeof response === 'string' ? response : JSON.stringify(response);
    await chatHistory.addMessage(new AIMessage(aiMessageContent));
    
    setMessages(prev => [
        ...prev,
        {role: "user", content: input},
        {role: "ai", content: JSON.parse(aiMessageContent).kwargs.content},
      ]
    )
    
    onCount(messages.filter(msg => msg.role === 'user').length + 1)
    // 입력 필드 초기화
    setTimeout(() => {
      setInput("");
    }, 100)
  }, [data, onCount, questionCount, messages, chatHistory, chain, input])
  
  const {formattedTexts, handleTextSelect, registerFormatContainerRef} = useTextFormatter()
  
  useEffect(() => {
    console.log(messages.length, messages, "check")
    if(messages.length > 1) {
      updateChatMessage(messages.slice(1,messages.length))
    }
  },[messages, updateChatMessage])
  
  useEffect(() => {
    updateChatFormattedTexts(formattedTexts)
  }, [formattedTexts, updateChatFormattedTexts])
  
  return (
    <div className={'h-full'}>
      <div className={'w-full h-[430px] py-10 overflow-y-scroll no-scrollbar'}>
        {messages.map((msg, index) => (
          <div key={index}>
            <div className={`flex items-center gap-2 mb-3 ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
              <img src={msg.role === 'ai' ? ChatbotProfile : UserProfile} alt={'AI CHATBOT'}/>
              <p className={'text-[16px] font-extrabold'}>{`${msg.role === 'ai' ? '프로젝트 매니저' : ''}`}</p>
            </div>
            <div className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
                 ref={ref => ref && registerFormatContainerRef(index.toString(), ref)}
                 onMouseUp={() => (formatMode === 'highlight' || formatMode === 'strikeThrough') && handleTextSelect(index.toString(), formatMode)}
                 onTouchEnd={() => (formatMode === 'highlight' || formatMode === 'strikeThrough') && handleTextSelect(index.toString(), formatMode)}
            >
              <p
                className={`max-w-[70%] text-[16px] text-left font-bold leading-6 -tracking-[0.5px] break-keep p-4 rounded-xl ${msg.role === 'ai' ? 'bg-[#FEF3D3] text-black' : 'bg-[#F3F4F6] text-black'}`}>
                <RenderFormatText text={msg.content} textFormats={formattedTexts}
                                  messageId={index.toString()}/>
              </p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={'flex gap-2 mt-10 items-center'}>
        <div className={'relative flex flex-1 items-center'}>
          <div className={'flex w-full items-center rounded-3xl bg-[#F3F4F6] p-2'}>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInput(e)}
              placeholder="질문을 입력하세요"
              className={'flex-1 h-10 p-4 bg-transparent rounded-3xl'}
            />
            <div className={'w-20 flex-grow-0 right-4 block'}>{getByteLength(input)} /200</div>
          </div>
        </div>
        <button type="submit" disabled={input.length === 0}>
          <img src={SendBtn2} alt={'test'}
               className={`flex w-10 ${input.length > 0 ? 'bg-[#EF4A60]' : 'bg-[#CBCCCE]'} p-2 rounded-full items-center justify-center`}
               loading={"lazy"}/>
        </button>
      </form>
    </div>
  );
};
