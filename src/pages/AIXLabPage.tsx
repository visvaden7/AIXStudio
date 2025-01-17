import {FunctionComponent, useState} from "react";
import {CardCarousel} from "../components/Card/CardCarousel.tsx";
import {portfolioList, projectList} from "../const/const.ts";
import upArrow from '../assets/pages/aixLab/arrow.svg'
import {ClassCodeModal} from "../components/Modal/ClassCodeModal.tsx";
import {classCodeBtn} from "../assets/pages/aixLab/classCodeBtn.tsx";
import {ExperienceRobot} from "../components/ExperienceRobot.tsx";
import {MakeImageModal} from "../components/Modal/MakeImageModal.tsx";
import {ChatbotModal} from "../components/Modal/ChatbotModal.tsx";

export const AIXLabPage: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isOpenImageAiModal, setIsOpenImageAiModal] = useState(false)
  const [isOpenChatbotModal, setIsChatbotAiModal] = useState(false)
  return (
    <div className={'relative w-full font-nanumSquareRound'}>
      <div className={'flex md:flex-row flex-col text-left justify-between mt-[60px] mb-[80px]'}>
        <div className={'flex flex-col'}>
          <p className={'text-[64px] font-extrabold leading-[96px] -tracking-[0.5px]'}>AiX LAB</p>
          <p className={'text-[16px] leading-[30px] -tracking-[0.5px] font-normal'}>직접 체험하여 배우는 진짜 Ai, AiX Lab에서
            만나보세요.</p>
        </div>
        <div className={'w-[350px]'}>
          <div
            className={'relative w-full flex justify-center items-center rounded-3xl transition duration-300 ease-in-out hover:scale-110'}
            onClick={() => setIsModalOpen(true)}>
            <div className={'absolute top-0 right-0 flex justify-end w-full'}>{classCodeBtn()}</div>
            <div className={'absolute top-0 right-2 flex gap-2 justify-end items-center z-10'}>
              <p className={'text-[18px] text-white font-bold p-4'}>
                클래스 코드로 참여하기
              </p>
              <div>
                <img src={upArrow} alt={'apply by classCode'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClassCodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className={'w-[450px]'}/>
      <div className={'flex flex-col gap-20 mb-20'}>
        {/*  진행중인 체험*/}
        <CardCarousel cardList={projectList} itemsPerPage={3} label={'진행중인 체험'}/>
        {/*  참여가능한 체험*/}
        <CardCarousel cardList={projectList} itemsPerPage={3} label={'참여가능한 체험'}/>
        {/*  완료한 체험*/}
        <CardCarousel cardList={portfolioList} itemsPerPage={4} label={'완료한 체험'}/>
        {/*  좋아요 누른 체험*/}
        <CardCarousel cardList={portfolioList} itemsPerPage={4} label={'좋아요 누른 체험'}/>
      </div>
      <ExperienceRobot isHovering={isHovering} onHover={() => setIsHovering(true)} outHover={() => setIsHovering(false)} openChatModal={() => setIsChatbotAiModal(true)} openImageModal={() => setIsOpenImageAiModal(true)}/>
      <MakeImageModal isOpen={isOpenImageAiModal} onClose={() => setIsOpenImageAiModal(false)}/>
      <ChatbotModal isOpen={isOpenChatbotModal} onClose={() => setIsChatbotAiModal(false)}/>
    </div>
  )
}