import * as section2Img from "../../../assets/pages/main/section2";
import {copies} from "../../../const/const.ts";
import {motion} from "motion/react";
import {FunctionComponent, useRef} from "react";
import {useRelativeScrollIndex} from "../../../hook/useScrollIndex.ts";

export const Section2ByIntroduction1: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRelativeScrollIndex({
    containerRef,
    sectionCount: copies.length,
    viewportMultiplier: 0.9
  })
  
  return (
    <div ref={containerRef} className="absolute top-[100vh] w-full h-[300vh] flex flex-col items-center z-10 overscroll-y-auto"
         style={{
           background:
             "radial-gradient(236.54% 74.84% at 50% 50%, #FFE8BF 0%, #FFD792 100%), linear-gradient(0deg, #FFE5B8 0%, #FFE5B8 100%), #FFF9EF",
         }}>
      {/* 고정된 배경 */}
      <div className="sticky top-0 left-0 w-full h-screen flex justify-center">
        <img src={section2Img.Earth} alt="earth"
             className="mainSection2-img-earth"/>
        <img src={section2Img.FlyingBoy1} alt="flying boy 1"
             className="mainSection2-img-FlyingBoy1"/>
        <img src={section2Img.stars1} alt="stars 1" className="mainSection2-img-star1"/>
        <img src={section2Img.Robot} alt="flying robot"
             className="mainSection2-img-robot"/>
        <img src={section2Img.planet} alt="planet" className="mainSection2-img-planet"/>
        <img src={section2Img.FlyingBoy2} alt="flying boy 2"
             className="mainSection2-img-FlyingBoy2"/>
        <img src={section2Img.FlyingGirl3} alt="flying girl 3"
             className="mainSection2-img-FlyingGirl3"/>
        <img src={section2Img.whale} alt="blue whale"
             className="mainSection2-img-whale"/>
        <img src={section2Img.stars2} alt="star2" className="mainSection2-img-star2"/>
        <img src={section2Img.Rabbit} alt="rabbit" className="mainSection2-img-rabbit"/>
        <div className={'relative w-full flex-col justify-center'}>
          {copies.map((section, idx) => {
            if (currentIndex === idx) {
              return (
                <motion.div
                  key={`content-${idx}`}
                  initial={{opacity: 0, y: '-5%', x: '-50%'}}
                  animate={currentIndex === idx ? {opacity: 1} : {opacity: 0}}
                  transition={{duration: 0.5, ease: 'easeInOut'}}
                  exit={{opacity: 0}}
                  className="absolute top-[15%] left-[52%] flex-col gap-10 transfrom -translate-x-1/2 w-full text-center"
                  style={{color: section.color, height: '100vh'}}
                >
                  <div className={'flex gap-2 justify-center items-center mb-[4%]'}>
                    <img src={section2Img.Flower} alt={'flower'}/>
                    <p className={'text-[24px] font-bold leading-[150%] tracking-[-0.5px] text-black'}>
                      직접만들어보며
                    </p>
                    <div className={'relative'}>
                      <p
                        className={'absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-[24px] font-bold leading-[150%] tracking-[-0.5px] text-white'}>
                        재미있게 배우는 AI
                      </p>
                      <img src={section2Img.WormThinkBoxGr} alt={'thinkBox'}/>
                    </div>
                  </div>
                  <h1 className="text-[68px] font-extrabold">{section.title[0]}</h1>
                  <h1 className="text-[68px] font-extrabold">{section.title[1]}</h1>
                  <div className={'text-black'}>
                    <p className="text-[30px] mt-4">{section.content[0]}</p>
                    <p className="text-[30px]">{section.content[1]}</p>
                  </div>
                </motion.div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}