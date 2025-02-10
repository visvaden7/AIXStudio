import {FunctionComponent} from "react";
import chatBg from "../assets/pages/aixLab/chat_bg.svg";
import chatbot from "../assets/pages/aixLab/chatbotImg.svg";

interface Props {
  isHovering: boolean;
  onHover: () => void;
  outHover: () => void;
  openImageModal:() => void;
  openChatModal:() => void;
}

export const ExperienceRobot:FunctionComponent<Props> = ({isHovering, onHover, outHover, openImageModal, openChatModal}) => {
  return (
    <>
      <div className={`fixed flex flex-col bottom-1/4 right-5 ${isHovering ? '' : 'animate-float-robot-5s'}`}
           onMouseOver={onHover} onMouseLeave={outHover}>
        {isHovering
          ? (
            <div className={'flex flex-col gap-2'}>
              <div className={'px-5 py-3 bg-[#EF4A60] text-white font-extrabold rounded-[16px]'} onClick={openImageModal}>이미지 만들기</div>
              <div className={'px-5 py-3 bg-[#FFE552] text-[#111] font-extrabold rounded-[16px]'} onClick={openChatModal}>챗봇 Aider</div>
            </div>
          )
          : (
            <div className={'relative flex justify-center'}>
              <img src={chatBg} alt={'chat-bubble'} className={'w-100% h-100%'}/>
              <div className={'absolute top-3 text-white text-[18px] font-extrabold break-keep z-10'}>
                <p>재미있는 AI</p>
                <p>체험 해볼래?</p>
              </div>
            </div>
          )}
        <div>
          <img src={chatbot} alt={'chatbot'}/>
        </div>
      </div>
    </>
  )
}