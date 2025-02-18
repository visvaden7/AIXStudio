import {FunctionComponent} from "react";
import {Section2ByIntroduction1} from "../components/Page/Main/Section2ByIntroduction1.tsx";
import {Section3ByIntroduction2} from "../components/Page/Main/Section3ByIntroduction2.tsx";
import {Section4ByPortfolio} from "../components/Page/Main/Section4ByPortfolio.tsx";
import {Section5ByProject} from "../components/Page/Main/Section5ByProject.tsx";
import {Section1ByBanner} from "../components/Page/Main/Section1ByBanner.tsx";

export const MainPage: FunctionComponent = () => {
  return (
    
    <div className="relative flex flex-col justify-center items-center">
      <div className="relative w-screen h-[1100vh] bg-[#D9D9D9]">
        {/*section1*/}
        <Section1ByBanner/>
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
