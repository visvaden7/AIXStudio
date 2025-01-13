import {FunctionComponent} from "react";

interface ProjectLayoutProps {
  children?: React.ReactNode;
  titleKo: string;
  tags: string[];
}

export const ProjectLayout:FunctionComponent<ProjectLayoutProps> = ({ children, titleKo, tags }) => {
  return (
    <div className={'project flex-col font-pretendard justify-center'}>
      <div className={'flex gap-5 items-center py-[20px]'}>
        <p className={'text-[28px]'}>{titleKo}</p>
        <div className={'flex gap-2'}>
          {tags.map(tag => {
            return (
              <p className={'text-[14px] text-gray-500'}>
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