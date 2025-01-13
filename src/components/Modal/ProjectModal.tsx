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
      <div className={'flex flex-col gap-5 w-full font-pretendard'}>
        <div className={'text-left'}>
          <p className={'text-[26px]'}>{project.titleKo}</p>
          <p className={'text-[24px]'}>{project.titleEn}</p>
          <div className={'flex gap-3 mt-2 items-center'}>
            {project.hash.map(code => {
              return (
                <div className={'p-2 bg-[#FFE882] rounded-xl'}>
                  <p>{code}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className={'p-2 text-[#FFE882] bg-black rounded-xl'}>
          {project.type}
        </div>
        <div>
          <img src={project?.imgUrl} alt={project?.titleKo} className={'w-full rounded-xl'}/>
        </div>
        <div>
          {/*//TODO: 기본 값은 비활성화 아이디에 따라 활성화 validation 기능 필요 */}
          <button className={'w-full p-2 bg-[#FFE552] text-black rounded-xl'} onClick={() => navigate(`/project/${project.idx}`, {
            // state: { titleKo: project.titleKo, titleEn: project.titleEn, subTitle: project.subTitle, imgUrl: project.imgUrl, hash: project.hash, story: project.story, timeStamp: project.timeStamp}
          })}>프로젝트 시작하기</button>
        </div>
      </div>
    </Modal>
  )
}