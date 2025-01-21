import {ProgressBar} from "../ProgressBar.tsx";
import {FunctionComponent, useState} from "react";
import {RiErrorWarningLine} from "react-icons/ri";
import {FaRegCircleQuestion} from "react-icons/fa6";
import {Chatbot} from "../Chatbot/Chatbot.tsx"
import {LuEraser, LuPenLine} from "react-icons/lu";

interface Step1Props {
  imgUrl: string;
  titleKo: string;
  currentStep: number;
  story: string;
}

const titleClass = 'text-[40px] text-[#EF4A60] font-extrabold leading-[60px] -tracking-[0.5px]'
const subjectClass = 'text-[18px] mb-[15px] text-[#666] leading-7 -tracking-[0.5px]'

export const ProjectStep: FunctionComponent<Step1Props> = ({imgUrl, titleKo, currentStep, story}) => {
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

interface Step2Props {
  currentStep: number;
  onSelect: (category: string) => void
}

type Keywords = {
  idx?: number;
  name: string;
  showStory: boolean;
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

interface Step3Props {
  currentStep: number;
  category: string;
}

export const ProjectStep3: FunctionComponent<Step3Props> = ({currentStep, category}) => {
  const [questionCount, setQuestionCount] = useState(0)
  const CountNumberOfQuestion = (num: number) => {
    setQuestionCount(num)
  }
  const questionFullCount = 10
  return (
    <div>
      <div className={'flex-col text-left'}>
        <p className={titleClass}>정보수집 with AI</p> {/*서브타이틀1*/}
        <p className={subjectClass}>문제 분석을 위해 필요한 정보를 Ai에게 신중하게 질문하며 확인해보세요!</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      {/*이미지 대신 프로젝트 컨텐츠로 변경*/}
      <div className={'w-full h-full p-5 border border-black rounded-xl '}>
        <div className={'flex justify-between bg-gray-200 p-4 rounded-xl text-blue-500'}>
          <p>{`선택한 미션 키워드 : ${category} | AI 질문 기회는 총 10번! 신중하게 질문해 보세요!`} </p>
          <p>{'사용 질문 횟수 '}<strong className={'text-red-600'}>{`${questionCount}`}</strong>{`/${questionFullCount}`} </p>
        </div>
        <div>
          <Chatbot data={category} onCount={CountNumberOfQuestion} questionCount={questionFullCount}/>
        </div>
      </div>
      <div className={'flex gap-3 py-4'}>
        <button className={'flex gap-2 items-center border border-black bg-[#F3F4F6] rounded-lg py-1 px-2'}><LuPenLine/>밑줄치기</button>
        <button className={'flex gap-2 items-center border border-black bg-[#F3F4F6] rounded-lg py-1 px-2'}><LuEraser/>지우기</button>
      </div>
      <div className={'flex items-center py-2'}>
        <RiErrorWarningLine/>
        <p>필요한 정보는 밑줄을 쳐서 보관하고, 불필요한 정보는 지우개로 지워보세요!</p>
      </div>
    </div>
  )
}