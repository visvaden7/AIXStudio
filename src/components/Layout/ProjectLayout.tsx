import {FunctionComponent, ReactNode, useEffect} from "react";
import projectTitleIco from '../../assets/pages/project/ico_img.svg'
import {useProjectStore} from "../../store/useProjectStore.ts";

interface ProjectLayoutProps {
  children?: ReactNode;
  titleKo: string;
  tags: string[];
}

export const ProjectLayout:FunctionComponent<ProjectLayoutProps> = ({ children, titleKo, tags }) => {
  const {currentStep} = useProjectStore()
  const scrollTop = () => window.scrollTo(0,0)
  useEffect(() => {
    scrollTop()
  }, [currentStep]);
  return (
    <div className={'project flex-col h-screen font-pretendard justify-center'}>
      <div className={'flex gap-5 items-center py-[20px]'}>
        <div className={'flex items-center'}>
          <div>
            <img src={projectTitleIco} alt={'title'} />
          </div>
          <p className={'text-[18px] font-bold leading-7 -tracking-[0.5px]'}>{titleKo}</p>
        </div>
        
        <div className={'flex gap-2'}>
          {tags.map(tag => {
            return (
              <p key={tag} className={'text-[14px] font-bold py-1 px-2 text-[#111] border border-black/30 rounded-xl leading-5 -tracking-[0.5px]'}>
                {tag}
              </p>
            )
          })}
        </div>
      </div>
      {children}
    </div>
  )
}