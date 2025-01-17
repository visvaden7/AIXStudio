import {Card} from "./Card.tsx";
import {Project} from "../../@types/domain.ts";
import {FunctionComponent, useState} from "react";
import survey from '../../assets/pages/aixLab/ic_survey.svg'
import {SurveyModal} from "../Modal/SurveyModal.tsx";

interface Props {
  project: Project;
  className?: string;
  onClick?: () => void;
  hasSurvey?: boolean;
}

export const ProjectCard: FunctionComponent<Props> = ({project, onClick, className, hasSurvey = false}) => {
  const [isModalOepn, setIsModalOpen] = useState(false)
  return (
    <Card className={`flexible-card ${className}`}>
      <div className={'flex flex-col w-full text-left'} onClick={onClick}>
        <div className={'relative w-full rounded-[16px] overflow-hidden'}>
          <img src={project.imgUrl} alt={project.titleKo}
               className={'w-full h-[250px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'}/>
          {/*설문지 조사 여부, 완료여부, */}
          {project.isSurvey
            && hasSurvey
            && <div className={'absolute top-3 right-2.5 flex gap-1 justify-center p-1 w-[25%] bg-white rounded-[36px]'}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true)
                    }}>
                  <img src={survey} alt={'survey'}/>
                  <p className={'text-[14px] font-bold'}>설문지 조사</p>
              </div>}
        </div>
        <div className={'card-tag flex gap-1 py-4 justify-start text-[14px] font-bold -tracking-[0.5px]'}>
          <p
            className={'flex bg-[#EDEDED] text-black py-1 px-2 rounded-lg justify-center items-center leading-[21px]'}>
            PROJECT
          </p>
          <p
            className={'flex bg-[#FFE552] text-black py-1 px-2 rounded-lg justify-center items-center leading-[21px]'}>
            {project.type}
          </p>
        </div>
        <p className={'text-[24px] leading-[36px] -tracking-[0.5px] font-extrabold'}>{project.titleKo}</p>
        <p className={'text-[16px] leading-[24px]'}>{project.titleEn}</p>
      </div>
      {/*TODO: 프로젝트 설문지 여부에 따라 생성*/}
      <SurveyModal isOpen={isModalOepn} onClose={() => setIsModalOpen(false)} className={'w-[22%]'}
                   surveyUrl={'https://newjr.aixstudio.kr/'}/>
    </Card>
  )
}