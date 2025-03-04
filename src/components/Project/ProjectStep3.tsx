import {FunctionComponent} from "react";
import {subjectClass, titleClass} from "../../const/const.ts";
import {ProgressBar} from "../ProgressBar.tsx";
import {ProjectChatbot} from "../Chatbot/ProjectChatbot.tsx";
import {useProjectStore} from "../../store/useProjectStore.ts";

interface Step3Props {
  category: string;
}



export const ProjectStep3: FunctionComponent<Step3Props> = ({category}) => {
  const currentStep = useProjectStore(state => state.currentStep)
  return (
    <div>
      <div className={'flex-col text-left'}>
        <p className={titleClass}>정보수집 with AI</p> {/*서브타이틀1*/}
        <p className={subjectClass}>문제 분석을 위해 필요한 정보를 Ai에게 신중하게 질문하며 확인해보세요!</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      <ProjectChatbot category={category}/>
    </div>
  )
}