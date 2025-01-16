import {Card} from "./Card.tsx";
import {Project} from "../../@types/domain.ts";
import {FunctionComponent} from "react";

interface Props {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export const ProjectCard:FunctionComponent<Props> = ({project, onClick, className }) => {
  return (
    <Card className={`flexible-card ${className}`}>
      <div className={'flex flex-col w-full text-left'} onClick={onClick}>
        <div className={'relative w-full rounded-[16px] overflow-hidden'}>
          <img src={project.imgUrl} alt={project.titleKo}
               className={'w-full h-[250px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'}/>
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
    </Card>
  )
}