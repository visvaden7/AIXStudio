import {cloneElement, FunctionComponent, useMemo, useState} from "react";
import {ProjectStep} from "./ProjectStep.tsx";
import {ProjectStep2} from "./ProjectStep2.tsx";
import {ProjectStep3} from "./ProjectStep3.tsx";
import {ProjectLayout} from "../Layout/ProjectLayout.tsx";
import {ProjectStep4} from "./ProjectStep4.tsx";
import {ProjectStep5} from "./ProjectStep5.tsx";
import {useLocation} from "react-router-dom";
import {useProjectStore} from "../../store/useProjectStore.ts";
import {ProjectStep6} from "./ProjectStep6.tsx";


export const Projects:FunctionComponent = () => {
  const {project} = useLocation().state
  const [category, setCategory] = useState<string>('우주 로봇 개발');
  const currentStep = useProjectStore(state => state.currentStep)
  // const [project, setProject] = useState<Project>();
  
  const titleKo = project.titleKo;
  const tags = project.hash;
  const imgUrl = project.imgUrl;
  const story = project.story;

  const {nextStep, prevStep} = useProjectStore()

  const handleSelectCategory = (selectedCategory: string) => {
    setCategory(selectedCategory)
  }
  
  const ProjectModule = useMemo(() => new Map<number, JSX.Element>([
    [1, <ProjectStep imgUrl={imgUrl} titleKo={titleKo} story={story}/>],
    [2, <ProjectStep2 onSelect={handleSelectCategory}/>],
    [3, <ProjectStep3 category={category}/>],
    [4, <ProjectStep4/>],
    [5, <ProjectStep5/>],
    [6, <ProjectStep6/>],
  ]),[imgUrl, titleKo, story, category]);
  
  const modulesOrder = [1, 2, 3, 4, 5, 6]; // Sample data from backend
  const renderedModules = useMemo(() => {
    return modulesOrder.map((order, idx) => {
      if(currentStep === idx + 1){
        const element = ProjectModule.get(order);
        return element ? cloneElement(element, {key: order}) : null
      }
    });
  }, [ProjectModule, currentStep, modulesOrder]);
  
  return (
    <ProjectLayout titleKo={titleKo} tags={tags}>
      {/*컨텐츠*/}
      {/*해당 내용 진행 정도에 따라 변경*/}
      {/**/}
      {renderedModules}
      <div className={`flex w-full gap-5 mt-5 mb-20 ${currentStep === 1 ? 'justify-end': 'justify-between'} `}>
        {currentStep > 1 && <button className={'w-[20%] bg-[#E9E9E9] p-4 my-4 rounded-xl'} onClick={prevStep}>이전</button>}
        <button className={`w-[20%] bg-[#FFE552] p-4 my-4 rounded-xl`} onClick={nextStep}>다음</button>
      </div>
    </ProjectLayout>
  )
}