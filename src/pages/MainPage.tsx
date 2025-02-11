import {FunctionComponent} from "react";
import {Section2ByMain} from "../components/Page/Main/Section2ByMain.tsx";
import {Section3ByMain} from "../components/Page/Main/Section3ByMain.tsx";
import {Section4ByMain} from "../components/Page/Main/Section4ByMain.tsx";

export const MainPage: FunctionComponent = () => {
  return (
    
    <div className="relative flex flex-col justify-center items-center">
      {/*section1*/}
      <div className="relative w-screen h-[1000vh] bg-[#D9D9D9]">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center z-10">
          <div>
            {/*TODO: 영상 주소 받아오는 api 혹은 내장 영상 체크*/}
            <iframe width={1920}
                    height={1080}
                    src="https://www.youtube.com/embed/aRmpaq9sbLA?autoplay=1&mute=1"
                    title="🛑4K 서울 한강공원 올림픽대로 분수쇼 Seoul Han River Park Olympic Expressway Fountain Show LoFi Music🛑실시간 로파이 라이브"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className={'w-screen h-screen border-0'}
                    allowFullScreen></iframe>
          </div>
          <div className="absolute text-center">
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
        <Section2ByMain/>
        {/*section3*/}
        <Section3ByMain/>
        {/*section4*/}
        <Section4ByMain/>
      </div>
    </div>
  );
};
