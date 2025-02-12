import {FunctionComponent, useRef} from "react";
import {MainPortPolioCard} from "../../Card/MainPortPolioCard.tsx";
import {portfolioList} from "../../../const/const.ts";
import {motion, useScroll, useTransform} from "motion/react";
import {IoArrowForwardSharp} from "react-icons/io5";
import * as section4Img from '../../../assets/pages/main/section4'

export const Section4ByPortfolio: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sortedList = portfolioList.slice(0, 5)
  const {scrollYProgress} = useScroll({target: containerRef, offset: ['start start', 'end start']})
  // const currentIndex = useRelativeScrollIndex({containerRef, sectionCount: sortedList.length, viewportMultiplier: 1.3})
  const xTransform = useTransform(scrollYProgress, [0, 1], ["-80%", "50%"]);
  const opacityTransform = useTransform(scrollYProgress, [0.9, 0.95, 1], [1, 0.5, 0]);
  
  return (
    
    <div ref={containerRef}
         className={'absolute top-[700vh] w-full h-[300vh] flex z-10 bg-[#E9F6FF]'}>
      {/* 카드리스트 */}
      <div className={'sticky top-0 left-0 w-full h-screen flex gap-10 items-center'}>
        {/*고정부분*/}
        <div>
          <img src={section4Img.asterisk} alt={'asteriskBg'} className={'absolute bottom-0 left-[5%]'}/>
          <img src={section4Img.idea} alt={'idea character'} className={'absolute bottom-[11%] right-[7%]'}/>
          <img src={section4Img.people} alt={'people'} className={'absolute bottom-[10%] right-[19.5%]'}/>
          <img src={section4Img.chatRobot} alt={'chatRobot'} className={'absolute bottom-[20%] right-[31.5%] animate-float-robot-3s'}/>
          <img src={section4Img.cloud} alt={'cloud1'} className={'absolute top-[5%] right-[40%] animate-float-robot-5s'}/>
          <img src={section4Img.cloud} alt={'cloud2'} className={'absolute bottom-[43%] right-[3%] animate-float-robot-5s'}/>
        </div>
        <div className={'relative w-[170%] h-screen flex items-center overflow-hidden'}>
          <motion.div className={'flex gap-5 w-[115vw] h-[572px] no-scrollbar'}
                      animate={{ x: '-100%' }}
                      transition={{duration: 0.5, ease: 'easeInOut'}}
                      style={{x: xTransform, opacity: opacityTransform}}>
            {sortedList.map((portfolio, idx) => {
              return (
                <MainPortPolioCard portfolio={portfolio} key={`portfolio-${idx}`}/>
              )
            })}
          </motion.div>
          <div className={'absolute top-0 right-0 w-[5%] h-full bg-gradient-to-r from-transparent to-[#E9F6FF]'}></div>
        </div>
        {/* 네비게이션 메뉴*/}
        <div className={'w-full h-screen flex-col mt-[30%]'}>
          <div className={'relative'}>
            <p className={'w-1/2 font-nanumSquareRound font-extrabold text-[48px] leading-[140%] break-keep text-left'}>
              다른 친구들이 완성한 결과물을 살펴보세요
            </p>
            <img src={section4Img.highlight} alt={'highlight'} className={'absolute top-[62%] '}/>
          </div>
          <div className={'flex justify-around items-center p-5 rounded-3xl w-[30%] bg-[#FFE552] mt-20'}>
            <span className={'text-xl leading-[150%] -tracking-[0.5px]'} onClick={() => alert('개발 중입니다.')}>바로가기</span>
            <IoArrowForwardSharp/>
          </div>
        </div>
      </div>
    </div>
  )
}