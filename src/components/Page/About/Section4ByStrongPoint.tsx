import * as section4 from "../../../assets/pages/about/section4";
import {competenciesList} from "../../../const/const.ts";
import {FunctionComponent} from "react";

export const Section4ByStrongPoint:FunctionComponent = () => {
  return (
    <div className={'relative flex flex-col gap-[10%] w-screen h-screen justify-center items-center'}>
      <img src={section4.book} alt={'book'} className={'absolute top-[10%] right-[10%]'}/>
      <img src={section4.pen} alt={'pen'} className={'absolute bottom-[10%] left-[7%]'}/>
      <div className={'absolute flex w-screen h-screen -z-10'}>
        {Array.from({length: 2}).map((_, idx) => {
          return (
            <div key={`banner-${idx}`}
                 className={'w-1/2 h-screen bg-[#FFF9EF] rounded-tl-[120px] odd:rounded-tr-[120px]'}></div>
          )
        })}
      </div>
      <div className={'text-[56px] font-extrabold leading-[150%] -tracking-[0.5px]'}>
        <p>AiX STUDIO를 통해</p>
        <p><span className={'text-[#0AC290]'}>다음의 역량을</span> 키울 수 있습니다.</p>
      </div>
      <div className={'flex flex-wrap w-[70%] gap-10 justify-center'}>
        {competenciesList.map((competence, idx) => {
          return (
            <div key={`competence-${idx}`}
                 className={'flex flex-col gap-5 basis-[30%] h-[45%] bg-white py-10 px-8 rounded-3xl'}>
              <div className={'flex items-center justify-between font-nanumSquareRound'}>
                <span className={'text-[36px] font-extrabold leading-[150%]'}>{competence.key}</span>
                <span
                  className={'text-[16px] font-normal leading-[150%] -tracking-[0.5px] py-1 px-2 bg-[#FFE552] rounded-xl'}>{competence.title}</span>
              </div>
              <p className={'text-left'}>{competence.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}