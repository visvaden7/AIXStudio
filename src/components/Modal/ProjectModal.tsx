import {Modal} from "./Modal.tsx";
import {Project} from "../../@types/domain.ts";
import {FunctionComponent} from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export const ProjectModal:FunctionComponent<Props> = ({isOpen, onClose, project}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={'w-full'}>
        <div className={'text-left'}>
          <p>{project?.title}</p>
          <p>{project?.subTitle}</p>
          <div>
            {/* TODO: 키워드는 입력시 데이터 형태 체크하기*/}
            키워드
          </div>
        </div>
        <div>
          {project?.tag}
        </div>
        <img src={project?.imgUrl} alt={project?.title} className={'w-full'}/>
        <div>
          <button className={'w-full bg-purple-600 text-white'}>프로젝트 시작하기</button>
        </div>
      </div>
    </Modal>
  )
}