import {FunctionComponent, useState} from "react";
import {Keywords} from "../../@types/domain.ts";
import {subjectClass, titleClass} from "../../const/const.ts";
import {ProgressBar} from "../ProgressBar.tsx";
import {FaRegCircleQuestion} from "react-icons/fa6";
import {RiErrorWarningLine} from "react-icons/ri";

interface Step2Props {
  currentStep: number;
  onSelect: (category: string) => void
}

const stepContents = {
  imgUrl: 'https://mng.aixstudio.kr/images/uploads/project/project_main_.png',
  keywords: [
    {
      name: '안전과 보안',
      story: '안전과 보안을 위해서 무엇을 해야할까요? 알려주세요',
      position: 'top-[10%] right-[0%]'
    },
    {
      name: '교통과 이동',
      story: '교통과 이동을 위해서 무엇을 해야할까요? 알려주세요',
      position: 'top-[25%] left-[25%]'
    },
    {
      name: '환경과 에너지',
      story: '환경과 에너지를 위해서 무엇을 해야할까요? 알려주세요',
      position: 'top-[55%] left-[20%]'
    },
    {
      name: '기술과 편의',
      story: '기술과 편의을 위해서 무엇을 해야할까요? 알려주세요',
      position: 'top-[65%] right-[-20%]'
    }
  ]
}

export const ProjectStep2: FunctionComponent<Step2Props> = ({currentStep, onSelect}) => {
  const [selectKeywords, setSelectKeywords] = useState<Keywords>({name: '', showStory: false})
  const [selectContents, setSelectContents] = useState<number>();
  const [isHovering, setIsHovering] = useState(false)
  const [isShowContents, setIsShowContents] = useState(false)
  const handleMouseOver = (idx: number) => {
    setIsHovering(true);
    setSelectContents(idx)
  };
  
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  
  const handleShowContents = (idx: number, name: string) => {
    setIsShowContents(true)
    setSelectKeywords({idx: idx, name: name, showStory: true})
    onSelect(name)
  }
  return (
    <div>
      <div className={'flex-col text-left'}>
        <p className={titleClass}>미션 키워드 선택</p> {/*서브타이틀1*/}
        <p className={subjectClass}>그림 속 키워드를 보고 그 중 해결하고 싶은 미션 키워드를 선택해보세요.</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      {/*이미지 대신 프로젝트 컨텐츠로 변경*/}
      <div className={'w-full h-full rounded-xl '}>
        <div className={'flex justify-between bg-[#FFF7E2] p-4 rounded-[20px] text-black text-[40px]'}>
          <div className={'relative w-full h-full rounded-[20px] object-cover overflow-hidden'}>
            <img src={'https://mng.aixstudio.kr/images/uploads/project/project_main_.png'} alt={'hello'}/>
            {/*category selector*/}
            {stepContents.keywords.map((keyword, idx) => {
              return <div key={keyword.name} className={`block w-[50%] absolute ${keyword.position} break-keep`}
                          onClick={() => handleShowContents(idx, keyword.name)}
                          onMouseLeave={() => handleMouseOut()}
                          onMouseOver={() => handleMouseOver(idx)}>
                <div className={'flex gap-2'}>
                  <div className={'flex gap-2 items-center bg-yellow-300 rounded-3xl p-2 h-10'}>
                    <FaRegCircleQuestion className={'text-[32px]'}/>
                    <div
                      className={`category text-[20px] ${isHovering && selectContents === idx || selectKeywords.idx === idx ? '' : 'hidden'}`}>
                      {keyword.name}
                    </div>
                  </div>
                  <div
                    className={`w-[30%] text-[16px] font-normal bg-yellow-300 rounded-3xl p-2 ${selectContents === idx && isShowContents || selectKeywords.idx === idx ? '' : 'hidden'}`}>
                    {keyword.story}
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
        <div className={'flex items-center p-4'}>
          <RiErrorWarningLine/>
          <p>물음표를 모두 눌러 보세요. 다양한 미션 키워드를 확인할 수 있어요.</p>
        </div>
      </div>
    </div>
  )
}