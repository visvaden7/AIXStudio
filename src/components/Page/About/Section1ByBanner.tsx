import {FunctionComponent} from "react";
import * as section1 from "../../../assets/pages/about/section1";

export const Section1ByBanner: FunctionComponent = () => {
  return (
    <div
      className={'relative aboutSection1'}
      style={{backgroundImage: `url(${section1.banner}`, backgroundRepeat: 'no-repeat'}}>
      <div className={'flex flex-col gap-10 text-white font-nanumSquareRound justify-center items-center'}>
        <span
          className={'aboutSection1-title'}>Ai와 함께 세상을 <br/> 더 가치있게 만듭니다.</span>
        <p className={'aboutSection1-subtitle'}>미래의 인공지능 리더가 되는 방법, AiX STUDIO 에서
          찾아보세요!</p>
      </div>
      <div className={'text-center'}>
        <img src={section1.linePlum} alt={'line_plum'} className={'aboutSection1-line-plum'}/>
        <img src={section1.lineYellow} alt={'line_yellow'} className={'aboutSection1-line-yellow'}/>
      </div>
    </div>
  )
}