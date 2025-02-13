import {FunctionComponent} from "react";
import {Section2ByIntroduction1} from "../components/Page/Main/Section2ByIntroduction1.tsx";
import {Section3ByIntroduction2} from "../components/Page/Main/Section3ByIntroduction2.tsx";
import {Section4ByPortfolio} from "../components/Page/Main/Section4ByPortfolio.tsx";
import {Section5ByProject} from "../components/Page/Main/Section5ByProject.tsx";
import exampleVideo from '../assets/pages/main/example_video.mp4'

export const MainPage: FunctionComponent = () => {
  return (
    
    <div className="relative flex flex-col justify-center items-center">
      {/*section1*/}
      <div className="relative w-screen h-[1100vh] bg-[#D9D9D9]">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center z-10">
          <div className={'w-full'}>
            {/*TODO: 영상 주소 받아오는 api 혹은 내장 영상 체크*/}
            <video src={exampleVideo} className={'w-full h-screen border-0 object-cover'} autoPlay muted loop playsInline/>
            {/*"https://mgn50.aixstudio.kr:8443/aix_main_mov.mp4"*/}
            {/*<iframe width={1920}*/}
            {/*        height={1080}*/}
            {/*        src="https://mgn50.aixstudio.kr:8443/aix_main_mov.mp4"*/}
            {/*        title="aixstudio"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*        referrerPolicy="strict-origin-when-cross-origin"*/}
            {/*        className={'w-full h-screen border-0'}*/}
            {/*        allowFullScreen></iframe>*/}
          </div>
          <div className="absolute text-center hidden">
            <div className="font-nanumSquareRound font-extrabold text-[60px]">
              <p>AiX STUDIO</p>
              <p>미래기술을 쉽고 재미있게</p>
              <p>배우는 Ai 체험 공간</p>
            </div>
            <div className="font-nanumSquareRound font-normal text-[24px] text-black/50">
              <p>문제를 분석하고 창의적인 결과물을 만들어보며</p>
              <p>AiX STUDIO 에서 실생활에 쓸 수 있는 Ai 활용 능력을 키워보세요!</p>
            </div>
          </div>
        </div>
        {/*section2*/}
        <Section2ByIntroduction1/>
        {/*section3*/}
        <Section3ByIntroduction2/>
        {/*section4*/}
        <Section4ByPortfolio/>
        {/*section5*/}
        <Section5ByProject/>
      </div>
    </div>
  );
};
