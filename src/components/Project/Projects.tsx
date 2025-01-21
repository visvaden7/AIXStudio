import {FunctionComponent, useState} from "react";
// import {useParams} from "react-router-dom";
// import {Project} from "../../@types/domain.ts";
import {ProjectStep, ProjectStep2, ProjectStep3} from "./ProjectStep.tsx";
import {ProjectLayout} from "../Layout/ProjectLayout.tsx";


export const Projects:FunctionComponent = () => {
  // const {id} = useParams();
  const [currentStep, setCurrentStep] = useState(1)
  const totalStep = 5;
  const [category, setCategory] = useState<string>('우주 로봇 개발');
  // const [project, setProject] = useState<Project>();
  // mockupData
  const titleKo = '화성탐사'
  const tags = ['#화성콜로니','#화성주거','#화성건축','#우주개척자','#화성생활','#화성환경','#우주건축']
  const imgUrl = 'https://mng.aixstudio.kr/images/uploads/project/project_main_.jpg'
  const story = '화성탐사를 위해서는 다양한 측정기구들과 테라포밍을 위한 장치들이 필요합니다. 이런 상황에서 타개책이 필요합니다.'
  //서버에 진행상황 업데이트
  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    if(nextStep <= totalStep) setCurrentStep(nextStep)
  }
  
  const handlePrevStep = () => {
    const prevStep = currentStep - 1;
    if(prevStep > 0) setCurrentStep(prevStep)
  }
  
  const handleSelectCategory = (selectedCategory: string) => {
    setCategory(selectedCategory)
  }
  return (
    <ProjectLayout titleKo={titleKo} tags={tags}>
      {/*컨텐츠*/}
      {category}
      {/*해당 내용 진행 정도에 따라 변경*/}
      {currentStep === 1 && <ProjectStep imgUrl={imgUrl} titleKo={titleKo} currentStep={currentStep} story={story}/>}
      {currentStep === 2 && <ProjectStep2 currentStep={currentStep} onSelect={handleSelectCategory}/>}
      {currentStep === 3 && <ProjectStep3 category={category} currentStep={currentStep}/>}
      <div className={`flex w-full gap-5 mt-5 mb-20 ${currentStep === 1 ? 'justify-end': 'justify-between'} `}>
        {currentStep > 1 && <button className={'w-[20%] bg-[#E9E9E9] p-4 my-4 rounded-xl'} onClick={handlePrevStep}>이전</button>}
        <button className={`w-[20%] bg-[#FFE552] p-4 my-4 rounded-xl`} onClick={handleNextStep}>다음</button>
      </div>
    </ProjectLayout>
  )
}