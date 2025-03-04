import {ProgressBar} from "../ProgressBar.tsx";
import {FunctionComponent} from "react";
import {subjectClass, titleClass} from "../../const/const.ts";
import {useProjectStore} from "../../store/useProjectStore.ts";


interface Step1Props {
  imgUrl: string;
  titleKo: string;
  story: string;
}

export const ProjectStep: FunctionComponent<Step1Props> = ({imgUrl, titleKo, story}) => {
  const currentStep = useProjectStore(state => state.currentStep)
  return (
    <div>
      <div className={'flex-col text-left font-nanumSquareRound'}>
        <p className={titleClass}>스토리확인</p> {/*서브타이틀1*/}
        <p className={subjectClass}>의뢰인에게 온 메시지를 확인하세요</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      {/*이미지 대신 프로젝트 컨텐츠로 변경*/}
      <div className={'w-full h-full p-5 bg-[#FFF7E2] rounded-[20px]'}>
        <div className={'w-full rounded-[20px] overflow-hidden'}>
          <img src={imgUrl} alt={titleKo} className={'w-full aspect-video object-cover'}/>
        </div>
        <div className={'my-5 text-left'}>
          <p>{story}</p>
        </div>
      </div>
    </div>
  )
}