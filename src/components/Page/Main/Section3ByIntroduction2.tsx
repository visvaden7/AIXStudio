import {FunctionComponent, useRef} from "react";
import * as section3Img from "../../../assets/pages/main/section3";
import {introductionTexts} from "../../../const/const.ts";
import {motion} from "motion/react";
import {useRelativeScrollIndex} from "../../../hook/useScrollIndex.ts";

export const Section3ByIntroduction2: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRelativeScrollIndex({
    containerRef,
    sectionCount: introductionTexts.length,
    viewportMultiplier: 0.9
  })
  
  return (
    <div ref={containerRef} className={'absolute top-[400vh] w-full h-[300vh] flex flex-col items-center z-10 bg-[#FFF9EF]'}>
      <div className={'sticky top-0 left-0 w-full h-screen'}>
        <img src={section3Img.bgY} alt="writting y" className="absolute top-0 right-0 transform -translate-x-1/2"/>
        <img src={section3Img.sparkle} alt="robot1"
             className="absolute bottom-[0%] left-[20%] transform -translate-x-1/2"/>
        <img src={section3Img.robot1} alt="robot1"
             className="absolute bottom-[13%] left-[20%] animate-float-robot-5s"/>
        <img src={section3Img.spring} alt="spring"
             className="absolute bottom-[13%] left-[13%] animate-float-robot-3s"/>
        <img src={section3Img.aiBubble} alt="AI Bubble"
             className="absolute bottom-[35%] left-[33%]  animate-float-robot-3s"/>
        
        <div className={'flex-col justify-center'}>
          {introductionTexts.map((section, idx) => {
            if(currentIndex === idx){
              return (
                <div key={`video-${idx}`}>
                  <motion.div
                    initial={{opacity: 0}}
                    animate={currentIndex === idx ? {opacity: 1} : {opacity: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="absolute top-[10%] left-[25%] flex-col gap-10 transfrom -translate-x-1/2 w-[20%] text-center"
                  >
                    <div className={'flex gap-2 justify-center items-center mb-[15%]'}>
                      <img src={section3Img.sparkleSmall} alt={'flower'}/>
                      <p className={'text-[24px] font-bold leading-[150%] tracking-[-0.5px] text-[#21272A]'}>
                        AiX STUDIO
                      </p>
                      <div className={'relative'}>
                        <p
                          className={'absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-[24px] font-bold leading-[150%] tracking-[-0.5px] text-[#21272A]'}>
                          체험프로그램
                        </p>
                        <img src={section3Img.WormThinkBoxY} alt={'thinkBox'}/>
                      </div>
                    </div>
                    <div className={'text-left break-keep'}>
                      <p className="text-[48px] text-[#21272A] font-extrabold leading-[140%] -tracking-[0.5px]">{section.title}</p>
                      <div className={'text-black'}>
                        <p className="text-[20px] mt-4 leading-[180%] -tracking-[0.5px] break-keep">{section.content}</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    animate={currentIndex === idx ? {opacity: 1} : {opacity: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className={'absolute top-[23%] right-[10%] w-[42.74%] h-[55%] rounded-[54px] overflow-hidden'}>
                    <video src={section.videoUrl} className={'w-full h-full'} autoPlay muted loop playsInline/>
                  </motion.div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}