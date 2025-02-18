import {FunctionComponent} from "react";
import {Section1ByBanner} from "../components/Page/About/Section1ByBanner.tsx";
import {Section2ByAboutAIX1} from "../components/Page/About/Section2ByAboutAIX1.tsx";
import {Section3ByAboutAIX2} from "../components/Page/About/Section3ByAboutAIX2.tsx";
import {Section4ByStrongPoint} from "../components/Page/About/Section4ByStrongPoint.tsx";
import {Section5ByContact} from "../components/Page/About/Section5ByContact.tsx";

export const AboutPage: FunctionComponent = () => {
  return (
    <div className={'relative flex flex-col justify-center items-center '}>
      <div className={'w-screen h-[539vh]'}
           style={{background: 'linear-gradient(180deg, #FFF9EF 0%, rgba(255, 249, 239, 0.00) 70%)'}}>
        {/*section1*/}
        <Section1ByBanner/>
        {/*section2*/}
        <Section2ByAboutAIX1/>
        {/*section3*/}
        <Section3ByAboutAIX2/>
        {/*section4*/}
        <Section4ByStrongPoint/>
        {/*section5*/}
        <Section5ByContact/>
      </div>
    </div>
  )
}