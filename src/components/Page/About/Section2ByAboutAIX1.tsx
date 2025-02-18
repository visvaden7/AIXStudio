import {FunctionComponent} from "react";
import * as section2 from "../../../assets/pages/about/section2";
import {salesPoint} from "../../../const/const.ts";

export const Section2ByAboutAIX1:FunctionComponent = () =>  {
  return (
    <div className={'flex flex-col gap-10 justify-center items-center w-screen h-screen'}>
      <div className={'flex flex-col gap-[15%] w-[50%] h-[45%] justify-center items-center font-nanumSquareRound'}>
        <p className={'text-[56px] font-extrabold leading-[150%] -tracking-[0.5px]'}>
          AiX STUDIO를 통해 <span className={'text-[#0AC290]'}>Aider를</span> 양성합니다.
        </p>
        <div className={'flex flex-col items-center gap-[50%]'}>
          <div className={'relative w-full h-[20%] flex flex-col justify-center items-center'}>
            <img src={section2.chatbot} alt={'chatbot'}
                 className={'absolute -top-[400%] -right-[30%] animate-float-robot-3s'}/>
            <img src={section2.bubbleYellow} alt={'bubbleYellow'}
                 className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'}/>
            <p
              className={'text-[#111] text-[30px] font-extrabold leading-[136%] -tracking-[0.5px] z-10'}>Aider란?</p>
          </div>
          <span
            className={'text-[#111] w-[70%] text-[24px] font-normal leading-[150%] -tracking-[0.5px] break-keep z-10'}>‘돕다’라는 프랑스어로, Ai와 협력하여 미래세상의 다양한 이슈를 해결하며 세상을 이롭게 하는 사람을 뜻합니다.</span>
        </div>
      </div>
      <div className={'flex gap-10 w-full justify-center items-center'}>
        {salesPoint.map((point, idx) => {
          return (
            <div key={`point-${idx}`}
                 className={'flex flex-col basis-1/5 gap-10 aspect-[1/1.2] bg-yellow-500 justify-center items-center rounded-3xl'}
                 style={{background: 'linear-gradient(0deg, #FFD792 0%, #FFD792 100%), #FFE4EA'}}>
              <div className={'flex w-[30%] aspect-square justify-center items-center bg-white rounded-full p-4'}>
                <img src={point.imgUrl} alt={point.title}/>
              </div>
              <p
                className={'text-[30px] text-[#111] font-extrabold leading-[150%] -tracking-[0.5px]'}>{point.title}</p>
              <p
                className={'w-[80%] text-[20px] text-[#111] font-normal leading-[150%] -tracking-[0.5px] break-keep'}>{point.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}