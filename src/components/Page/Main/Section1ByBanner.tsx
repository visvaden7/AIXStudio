import exampleVideo from "../../../assets/pages/main/example_video.mp4";
import {FunctionComponent} from "react";

export const Section1ByBanner:FunctionComponent = () => {
  return (
    <div className="mainSection1">
      <div className={'w-full'}>
        {/*TODO: 영상 주소 받아오는 api 혹은 내장 영상 체크*/}
        <video src={exampleVideo} className={'w-full h-screen border-0 object-cover'} autoPlay muted loop playsInline/>
      </div>
      <div className="absolute text-center hidden">
        <div className="mainSection1-title">
          <p>AiX STUDIO</p>
          <p>미래기술을 쉽고 재미있게</p>
          <p>배우는 Ai 체험 공간</p>
        </div>
        <div className="mainSection1-subtitle">
          <p>문제를 분석하고 창의적인 결과물을 만들어보며</p>
          <p>AiX STUDIO 에서 실생활에 쓸 수 있는 Ai 활용 능력을 키워보세요!</p>
        </div>
      </div>
    </div>
  )
}