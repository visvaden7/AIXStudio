import {FunctionComponent, useMemo, useState} from "react";
import {subjectClass, titleClass} from "../../const/const.ts";
import {ProgressBar} from "../ProgressBar.tsx";
import {ValidCardCarousel} from "../Card/ValildCardCarousel.tsx";
import {useProjectStore} from "../../store/useProjectStore.ts";
import {ChatMessage} from "../../@types/domain.ts";
import {RenderFormatText} from "../Chatbot/RenderFormatText.tsx";
import {getByteLength} from "../../utils/getByteLength.ts";

interface selectChatMessage extends ChatMessage {
  idx: number;
  timeStamp: string;
  isValid: boolean;
}

export const ProjectStep4: FunctionComponent = () => {
  const currentStep = useProjectStore(state => state.currentStep)
  const message = useProjectStore(state => state.chatMessage)
  const formattedText = useProjectStore(state => state.formattedTexts)
  const {addValidData} = useProjectStore()
  const chatbotMessages = useMemo(() => {
    return message.filter(msg => msg.role === 'ai').map((msg, idx) => {
      return {id: idx, role: msg.role, content: msg.content, timeStamp: '', isValid: false}
    })
  }, [message])
  const [chatbotData, setChatbotData] = useState(chatbotMessages);
  //TODO: change message's property 'isValid''s status
  
  // const isValidChatbotMessage = useMemo(() => {
  //   return chatbotData.filter(msg => msg.isValid)
  // },[chatbotData])
  
  const initialChatMsg = chatbotMessages.length > 0 ? {idx: 0, ...chatbotMessages[0]} : {
    idx: 0,
    role: 'ai',
    content: '',
    timeStamp: '',
    isValid: false
  }
  const [selectChatMsg, setSelectChatMsg] = useState<selectChatMessage>(initialChatMsg);
  const [isEditable, setIsEditable] = useState(false)
  const [editMessage, setEditMessage] = useState(selectChatMsg.content)
  const handleSelectAnswer = (idx: number) => {
    setSelectChatMsg({idx, ...chatbotData[idx]})
    setEditMessage(chatbotData[idx].content)
    setIsEditable(false);
  }
  
  //검증하기
  const handleOpenValid = () => {
    if (!selectChatMsg.isValid) {
      window.open(`https://www.google.co.kr/search?q=${message[selectChatMsg.idx * 2].content}`)
    } else {
      alert('검증된 데이터 입니다.')
    }
    
  }
  //수정하기
  const handleEditAnswer = () => {
    const updatedSelectChatMessage = {...selectChatMsg, content: editMessage};
    setSelectChatMsg(updatedSelectChatMessage);
    setEditMessage(updatedSelectChatMessage.content);
    const updatedMessages = chatbotData.map((chat, index) =>
      index === selectChatMsg.idx ? {...chat, content: updatedSelectChatMessage.content} : chat
    );
    setChatbotData(updatedMessages)
    if (selectChatMsg.isValid) {
      alert('검증된 데이터 입니다.')
    } else {
      setIsEditable(prev => !prev);
    }
  }
  
  //검증완료
  const handleValidData = () => {
    setSelectChatMsg(prev => ({...prev, isValid: true}))
    const updatedChatbotMsg = chatbotData.map((chat, idx) => {
      return idx === selectChatMsg.idx ? {...chat, isValid: true} : chat
    })
    addValidData({id: selectChatMsg.idx, content: selectChatMsg.content, role: 'ai', isValid: selectChatMsg.isValid})
    setChatbotData(updatedChatbotMsg)
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
      <div className={'flex-col rounded-3xl'}>
        <div>
          <ValidCardCarousel cardList={chatbotData} itemsPerPage={3} label={'수집한 정보'} onClick={handleSelectAnswer}/>
        </div>
        <div className={'flex flex-col gap-5 text-left p-5'}>
          <p className={'font-bold text-[24px]'}>정보 검증</p>
          <div>
            <div className={'font-bold text-[20px]'}>질문</div>
            <div className={'border border-black rounded-2xl p-4 mt-3'}>
              {/* message is question and answer array , answer index is even */}
              <p>{message[selectChatMsg.idx * 2].content}</p>
            </div>
          </div>
          <div>
            <div className={'font-bold text-[20px]'}>
              대답
            </div>
            <p className={'text-right text-[#AAA] text-[14px]'}><span
              className={'text-[#111]'}>{`${getByteLength(selectChatMsg.content)}`}</span>{`/3000`}</p>
            <div className={'border border-black rounded-2xl p-4 mt-3'}>
              <p className={'flex-wrap'}>
                {
                  isEditable
                    ? <textarea className={'w-full h-full resize-none p-0'}
                                value={editMessage}
                                onChange={(e) => setEditMessage(e.target.value)}/>
                    :
                    <RenderFormatText text={selectChatMsg.content} messageId={((selectChatMsg.idx + 1) * 2).toString()}
                                      textFormats={formattedText}/>
                }
              </p>
            </div>
          </div>
          <div className={'flex gap-2 py-4 justify-center'}>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}
                    onClick={handleOpenValid}>검중하기
            </button>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}
                    onClick={handleEditAnswer}>
              {`${isEditable ? '수정완료' : '수정하기'} `}
            </button>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}
                    onClick={handleValidData}>{'검증완료'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}