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
      <div className={'sticky top-0 left-0 w-full h-screen overflow-hidden'}>
        <img src={section3Img.bgY} alt="writting y"
             className="mainSection3-img-y"/>
        <img src={section3Img.sparkle} alt="sparkle"
             className="mainSection3-img-sparkle"/>
        <img src={section3Img.robot1} alt="robot1"
             className="mainSection3-img-robot"/>
        <img src={section3Img.spring} alt="spring"
             className="mainSection3-img-spring"/>
        <img src={section3Img.aiBubble} alt="AI Bubble"
             className="mainSection3-img-bubble"/>
        
        <div className={'flex-col justify-center'}>
          {introductionTexts.map((section, idx) => {
            if(currentIndex === idx){
              return (
                <div key={`video-${idx}`} className={'mainSection3-index'}>
                  <motion.div
                    initial={{opacity: 0}}
                    animate={currentIndex === idx ? {opacity: 1} : {opacity: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="mainSection3-text-box"
                  >
                    <div className={'flex md:gap-2 md:flex-row sm:gap-0 sm:flex-col justify-center items-center md:mb-[15%] sm:m-0'}>
                      <img src={section3Img.sparkleSmall} alt={'flower'} className={'md:flex sm:hidden'}/>
                      <p className={'md:text-[24px] sm:text-[15px] font-bold leading-[150%] tracking-[-0.5px] text-[#21272A]'}>
                        AiX STUDIO
                      </p>
                      <div className={'relative'}>
                        <img src={section3Img.WormThinkBoxY} alt={'thinkBox'} className={'sm:w-[60%] sm:translate-x-1/3 md:w-[70%] md:translate-x-[5%]'}/>
                        <p
                          className={'absolute top-1/2 left-1/2 transform sm:-translate-x-1/2 md:-translate-x-[80%] -translate-y-1/2 text-[24px] sm:text-[14px] font-bold leading-[150%] tracking-[-0.5px] text-[#21272A]'}>
                          체험프로그램
                        </p>
                      </div>
                    </div>
                    <div className={'xl:w-full md:text-left sm:text-center sm:w-[90%] break-keep'}>
                      <p className="2xl:text-[48px] xl:text-[40px] md:text-[40px] md:mb-10 sm:text-[24px]  text-[#21272A] font-extrabold leading-[140%] -tracking-[0.5px]">{section.title}</p>
                      <div className={'text-black'}>
                        <p className="2xl:text-[20px] md:text-[18px] sm:text-[15px] mt-4 leading-[180%] -tracking-[0.5px] break-keep">{section.content}</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0}}
                    animate={currentIndex === idx ? {opacity: 1} : {opacity: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className={'mainSection3-video'}>
                    <video src={section.videoUrl} className={'w-full h-full object-contain'} autoPlay muted loop playsInline/>
                  </motion.div>
                </div>
              )
            }
          })}
          <div className={'mainSection3-scroll'}>
            {
              introductionTexts.map((_, idx) => {
                return (
                  <div key={`indicater-${idx}`} className={`w-[30%] bg-[#D9D9D9] aspect-square rounded-full ${currentIndex === idx ? 'bg-[#FFE552] shadow-[0_0_15px_5px_rgba(251,191,36,0.3)]': ''} 2xl:p-2 sm:p-1`}></div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}