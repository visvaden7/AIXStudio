import {Modal} from "./Modal.tsx";
import {Project} from "../../@types/domain.ts";
import {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export const ProjectModal:FunctionComponent<Props> = ({isOpen, onClose, project}) => {
  const navigate = useNavigate()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={'flex flex-col gap-5 w-full font-nanumSquareRound'}>
        <div className={'flex flex-col text-left gap-2'}>
          <p className={'text-[34px] font-extrabold leading-[40.8px] -tracking-[0.5px]'}>{project.titleKo}</p>
          <p className={'text-[20px] text-[#666]'}>{project.titleEn}</p>
          <div className={'flex gap-3 mt-2 items-center'}>
            {project.hash.map((code,idx) => {
              return (
                <div key={idx} className={'py-1 px-2 border border-black/40 rounded-xl'}>
                  <p>{code}</p>
                </div>
              )
            })}
          </div>
        </div>
        <hr/>
        <div className={'flex'}>
          <div className={'py-2 px-4 text-[18px] text-black bg-[#FFE882] rounded-xl'}>
            <p>{project.type}</p>
          </div>
        </div>
        <div>
          <img src={project?.imgUrl} alt={project?.titleKo} className={'w-full aspect-[680/430] rounded-xl object-cover'}/>
        </div>
        <div className={'mt-[20px]'}>
          {/*//TODO: 기본 값은 비활성화 아이디에 따라 활성화 validation 기능 필요 */}
          <button className={'w-full p-2 bg-[#FFE552] text-[18px] text-black rounded-xl font-bold leading-[27px] -tracking-[0.5px]'} onClick={() => navigate(`/project/${project.idx}`, {
            // state: { titleKo: project.titleKo, titleEn: project.titleEn, subTitle: project.subTitle, imgUrl: project.imgUrl, hash: project.hash, story: project.story, timeStamp: project.timeStamp}
          })}>프로젝트 시작하기</button>
        </div>
      </div>
    </Modal>
  )
}