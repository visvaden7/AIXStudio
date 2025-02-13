import {FunctionComponent, useMemo, useState} from "react";
import {subjectClass, titleClass} from "../../const/const.ts";
import {ProgressBar} from "../ProgressBar.tsx";
import {ValidCardCarousel} from "../Card/ValildCardCarousel.tsx";
import {useProjectStore} from "../../store/useProjectStore.ts";
import {ChatMessage} from "../../@types/domain.ts";
import {RenderFormatText} from "../Chatbot/RenderFormatText.tsx";

interface Step4Props {
  currentStep: number;
}

interface selectChatMessage extends ChatMessage {
  idx: number;
}

export const ProjectStep4: FunctionComponent<Step4Props> = ({currentStep}) => {
  // const currentSteps = useProjectStore(state => state.currentStep)
  const message = useProjectStore(state => state.chatMessage)
  const formattedText = useProjectStore(state => state.formattedTexts)
  const chatbotMessages = useMemo(() => {
    return message.filter(msg => msg.role === 'ai').map((msg,idx) => {
      return {id: idx, role: msg.role, content: msg.content, timeStamp: ''}
    })
  }, [message])
  // const {updateChatMessage} = useProjectStore()
  const [selectChatMsg, setSelectChagMsg] = useState<selectChatMessage>({idx:0, ...chatbotMessages[0]});
  const handleSelectAnswer = (idx: number) => {
    setSelectChagMsg({idx, ...chatbotMessages[idx]})
  }
  return (
    <div>
      <div className={'flex-col text-left'}>
        <p className={titleClass}>정보수집 with AI</p> {/*서브타이틀1*/}
        <p className={subjectClass}>문제 분석을 위해 필요한 정보를 AI 에게 신중하게 질문하며 확인해보세요!</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      <div className={'flex-col border border-black/30 rounded-3xl'}>
        {JSON.stringify(chatbotMessages)}{'123'}{JSON.stringify(message)}{JSON.stringify(formattedText)}{JSON.stringify(selectChatMsg)}
        <div>
          <ValidCardCarousel cardList={chatbotMessages} itemsPerPage={3} label={'수집한 정보'} onClick={handleSelectAnswer}/>
        </div>
        <div className={'flex flex-col gap-5 text-left p-10'}>
          <p>정보 검증</p>
          <div>
            <div className={'font-bold text-[24px]'}>질문</div>
            <div className={'border border-black rounded-2xl p-4 mt-3'}>
              <p>{message[selectChatMsg.idx*2].content}</p>
            </div>
          </div>
          <div>
            <div className={'font-bold text-[24px]'}>
              대답
            </div>
            <div className={'border border-black rounded-2xl p-4 mt-3'}>
            <p className={'flex-wrap'}>
              {formattedText.map((_, idx) => {
                console.log("test, idx", idx, ((idx+1)*2).toString())
                return <RenderFormatText text={selectChatMsg.content} messageId={((idx+1)*2).toString()} textFormats={formattedText}/>
              })}
            </p>
            </div>
          </div>
          
          <div className={'flex gap-2 py-4 justify-center'}>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}>검중하기</button>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}>수정하기</button>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}>검증완료</button>
          </div>
        </div>
      </div>
    </div>
  )
}