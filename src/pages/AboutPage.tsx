import {FunctionComponent} from "react";
import * as section1 from '../assets/pages/about/section1'
import * as section2 from '../assets/pages/about/section2'
import * as section3 from '../assets/pages/about/section3'
import * as section4 from '../assets/pages/about/section4'
import {introductionTexts, salesPoint} from "../const/const.ts";
const section3Icons = [
  section3.blueStar, section3.redSun, section3.yellowFlower
]

const competenciesList = [
  { key: "CA", title: "변화 적용력", content:'시대의 범용기술인 Ai 기술 수용에 대한 자신감을 바탕으로 새로운 지식과 기술을 능동적으로 수용할 수 있는 능력'},
  { key: "CT", title: "AI·컴퓨팅 사고력", content:'컴퓨터과학의 원리를 바탕으로 인공지능 및 컴퓨팅 시스템을 이용하여 복잡한 문제를 다양한 방식으로 해결할 수 있는 능력'},
  { key: "AI", title: "인공지능 소양", content:'인공지능의 개념과 작동 원리를 이해하고 삶 속에서 간단한 인공지능 기술을 활용할 수 있는 능력' },
  { key: "CST", title: "창의융합적 문제 해결역량", content:'인공지능 기술과 다양한 지식을 융합하여, 새로운 관점으로 창의적인 아이디어를 창출하여 다양한 문제를 해결하고 혁신할 수 있는 능력' },
  { key: "AHC", title: "AI·협업 역량", content:'사람과 인공지능이 서로 소통하여, 복잡한 문제를 협력하여 해결할 수 있는 능력'},
  { key: "PIC", title: "공익적 사고", content:'인공지능 기술로 인해 발생하는 사회적, 윤리적 변화를 이해하고, 공공의 이익에 도움이 되는 가치 판단과 포용적 행동을 실천할 수 있는 능력' }
];

export const AboutPage:FunctionComponent = () => {
  return (
    <div className={'relative flex flex-col justify-center items-center '}>
      <div className={'w-screen h-[700vh]'} style={{background: 'linear-gradient(180deg, #FFF9EF 0%, rgba(255, 249, 239, 0.00) 70%)'}}>
        {/*section1*/}
        <div className={'relative flex justify-center items-center w-full h-[10%] bg-local bg-black/20 z-10 overflow-hidden'} style={{backgroundImage: `url(${section1.banner}`, backgroundRepeat:'no-repeat'}}>
          <div className={'flex flex-col gap-10 text-white font-nanumSquareRound'}>
            <span className={'text-[68px] font-extrabold leading-[150%] -tracking-[0.5px]'}>Ai와 함께 세상을 <br/> 더 가치있게 만듭니다.</span>
            <p className={'text-[30px] font-bold leading-[150%] -tracking-[0.5px]'}>미래의 인공지능 리더가 되는 방법, AiX STUDIO 에서 찾아보세요!</p>
          </div>
          <div>
            <img src={section1.linePlum} alt={'line_plum'} className={'absolute top-[37%] left-[20%]'} />
            <img src={section1.lineYellow} alt={'line_yellow'} className={'absolute top-[15%] right-[17.5%]'} />
          </div>
        </div>
        {/*section2*/}
        <div className={'flex flex-col gap-10 justify-center items-center w-screen h-screen'}>
          <div className={'flex flex-col gap-[15%] w-[50%] h-[45%] justify-center items-center font-nanumSquareRound'}>
            <p className={'text-[56px] font-extrabold leading-[150%] -tracking-[0.5px]'}>
              AiX STUDIO를 통해 <span className={'text-[#0AC290]'}>Aider를</span> 양성합니다.
            </p>
            <div className={'flex flex-col items-center gap-[50%]'}>
              <div className={'relative w-full h-[20%] flex flex-col justify-center items-center'}>
                <img src={section2.chatbot} alt={'chatbot'} className={'absolute -top-[400%] -right-[30%] animate-float-robot-3s'}/>
                <img src={section2.bubbleYellow} alt={'bubbleYellow'} className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'}/>
                <p className={'text-[#111] text-[30px] font-extrabold leading-[136%] -tracking-[0.5px] z-10'}>Aider란?</p>
              </div>
              <span className={'text-[#111] w-[70%] text-[24px] font-normal leading-[150%] -tracking-[0.5px] break-keep z-10'}>‘돕다’라는 프랑스어로, Ai와 협력하여 미래세상의 다양한 이슈를 해결하며 세상을 이롭게 하는 사람을 뜻합니다.</span>
            </div>
          </div>
          <div className={'flex gap-10 w-full justify-center items-center'}>
            {salesPoint.map(point => {
              return (
                <div className={'flex flex-col basis-1/5 gap-10 aspect-[1/1.2] bg-yellow-500 justify-center items-center rounded-3xl'} style={{background:'linear-gradient(0deg, #FFD792 0%, #FFD792 100%), #FFE4EA'}}>
                  <div className={'flex w-[30%] aspect-square justify-center items-center bg-white rounded-full p-4'}>
                    <img src={point.imgUrl} alt={point.title}/>
                  </div>
                  <p className={'text-[30px] text-[#111] font-extrabold leading-[150%] -tracking-[0.5px]'}>{point.title}</p>
                  <p className={'w-[80%] text-[20px] text-[#111] font-normal leading-[150%] -tracking-[0.5px] break-keep'}>{point.content}</p>
                </div>
              )
            })}
          </div>
        </div>
        {/*section3*/}
        <div className={'relative flex flex-col gap-[5%] w-screen h-[185vh] items-center p-[5%]'}>
          <div className={'text-[56px] font-extrabold leading-[150%] -tracking-[0.5px]'}>
            <p>AiX STUDIO는</p>
            <p><span className={'text-[#0AC290]'}>다양한 체험을 제공</span>합니다!</p>
          </div>
          <img src={section3.smileGirl} alt={'smile-girl'} className={'absolute top-[5%] right-[20%] w-[15%]'} />
          <img src={section3.blockYellow} alt={'block-yellow'} className={'absolute top-0 left-[0%]'}/>
          <img src={section3.blockBlue} alt={'block-blue'} className={'absolute top-[7%] left-[5%]'}/>
          <div className={'flex flex-col gap-[80px] w-[70%]'}>
            {introductionTexts.map((introductionText,idx)=> {
              return (
                <div className={'flex items-center odd:flex-row-reverse z-10'}>
                  <div className={'w-[51%] rounded-[40px] overflow-hidden shadow-[0_16px_60px_0_rgba(0,0,0,0.30)]'}>
                    <video src={introductionText.videoUrl} className={'w-full'} autoPlay muted loop playsInline/>
                  </div>
                  <div className={` w-[49%] ${idx%2 === 0 ? '' : 'flex justify-end'}`}>
                    <div className={'text-wrapper flex flex-col gap-10 justify-center w-[70%]'}>
                      <div className={'flex gap-5 items-center text-[48px] text-[#21272A] font-extrabold leading-[140%] -tracking-[0.5px]'}>
                        <img src={section3Icons[idx]} alt={'icons'}/>
                        <p>{introductionText.title}</p>
                      </div>
                      <p className={`flex w-[95%] text-[20px] text-left break-keep`}>
                        {introductionText.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/*section4*/}
        <div className={'relative flex flex-col gap-[10%] w-screen h-screen justify-center items-center'}>
          <img src={section4.book} alt={'book'} className={'absolute top-[10%] right-[10%]'}/>
          <img src={section4.pen} alt={'pen'} className={'absolute bottom-[10%] left-[7%]'}/>
          <div className={'absolute flex w-screen h-screen -z-10'}>
            {Array.from({length:2}).map((_,idx) => {
              return (
                <div key={`banner-${idx}`} className={'w-1/2 h-screen bg-[#FFF9EF] rounded-tl-[120px] odd:rounded-tr-[120px]'}></div>
              )
            })}
          </div>
          <div className={'text-[56px] font-extrabold leading-[150%] -tracking-[0.5px]'}>
            <p>AiX STUDIO를 통해</p>
            <p><span className={'text-[#0AC290]'}>다음의 역량을</span> 키울 수 있습니다.</p>
          </div>
          <div className={'flex flex-wrap w-[70%] gap-10 justify-center'}>
            {competenciesList.map(competence => {
              return (
                <div className={'flex flex-col gap-5 basis-[30%] h-[45%] bg-white py-10 px-8 rounded-3xl'}>
                  <div className={'flex items-center justify-between font-nanumSquareRound'}>
                    <span className={'text-[36px] font-extrabold leading-[150%]'}>{competence.key}</span>
                    <span className={'text-[16px] font-normal leading-[150%] -tracking-[0.5px] py-1 px-2 bg-[#FFE552] rounded-xl'}>{competence.title}</span>
                  </div>
                  <p className={'text-left'}>{competence.content}</p>
                </div>
              )
            })}
          </div>
        </div>
        {/*section5*/}
        <div>About AIX contact</div>
      </div>
    </div>
  )
}