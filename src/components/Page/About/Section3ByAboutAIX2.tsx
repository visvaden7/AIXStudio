import {FunctionComponent} from "react";
import * as section3 from "../../../assets/pages/about/section3";
import {introductionTexts, section3Icons} from "../../../const/const.ts";

export const Section3ByAboutAIX2:FunctionComponent = () => {
  return(
    <div className={'relative flex flex-col gap-[5%] w-screen h-[185vh] items-center p-[5%]'}>
      <div className={'text-[56px] font-extrabold leading-[150%] -tracking-[0.5px]'}>
        <p>AiX STUDIO는</p>
        <p><span className={'text-[#0AC290]'}>다양한 체험을 제공</span>합니다!</p>
      </div>
      <img src={section3.smileGirl} alt={'smile-girl'} className={'absolute top-[5%] right-[20%] w-[15%]'}/>
      <img src={section3.blockYellow} alt={'block-yellow'} className={'absolute top-0 left-[0%]'}/>
      <img src={section3.blockBlue} alt={'block-blue'} className={'absolute top-[7%] left-[5%]'}/>
      <div className={'flex flex-col gap-[80px] w-[70%]'}>
        {introductionTexts.map((introductionText, idx) => {
          return (
            <div key={`introduction-${idx}`} className={'flex items-center odd:flex-row-reverse z-10'}>
              <div className={'w-[51%] rounded-[40px] overflow-hidden shadow-[0_16px_60px_0_rgba(0,0,0,0.30)]'}>
                <video src={introductionText.videoUrl} className={'w-full'} autoPlay muted loop playsInline/>
              </div>
              <div className={` w-[49%] ${idx % 2 === 0 ? '' : 'flex justify-end'}`}>
                <div className={'text-wrapper flex flex-col gap-10 justify-center w-[70%]'}>
                  <div
                    className={'flex gap-5 items-center text-[48px] text-[#21272A] font-extrabold leading-[140%] -tracking-[0.5px]'}>
                    <img src={section3Icons[idx]} alt={'icons'}/>
                    <p>{introductionText.title}</p>
                  </div>
                  <p className={`flex w-[95%] text-[20px] text-left break-keep`}>
                    {introductionText.content}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}