import {FunctionComponent, useState} from "react";
import {CoverModal} from "./CoverModal.tsx";
// import sendImg from '../../assets/pages/aixLab/send-btn2.svg'
import {Chatbot} from "../Chatbot/Chatbot.tsx";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatbotModal:FunctionComponent<Props> = ({isOpen, onClose}) => {
  const [questionCount, setQuestionCount] = useState(0)
  const CountNumberOfQuestion = (num: number) => {
    setQuestionCount(num)
  }
  return (
    <CoverModal isOpen={isOpen} onClose={onClose} className={'w-[25%] mb-[10%] mr-[15%]'}>
      <div className={'flex flex-col gap-1 text-left'}>
        <div className={'bg-yellow-400 pt-8 px-4'}>
          <p className={'text-[24px] font-extrabold'}>궁금한 것을 챗봇에게 물어보세요!</p>
          <div className={'flex justify-between'}>
            <p className={'text-[18px]'}>(5번 질문할 수 있어요)</p>
            <p>{questionCount} / 5</p>
          </div>
        
        </div>
        <div className={'p-4'}>
          <Chatbot data={''} questionCount={questionCount} onCount={CountNumberOfQuestion} formatMode={'normal'}/>
        </div>
        {/*<div className={'flex gap-2 items-center p-4'}>*/}
        {/*  <input type={'text'} placeholder={'내용을 입력해주세요'} className={'w-full border-2 border-[#F3F4F6] rounded-3xl p-2'}/>*/}
        {/*  <div className={'flex justify-center items-center p-1 w-10 h-10 bg-[#CBCCCE] rounded-full'}><img src={sendImg} alt={'send-button'} className={''}/></div>*/}
        {/*</div>*/}
      </div>
    </CoverModal>
  )
}