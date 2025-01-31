import {FunctionComponent, useState} from "react";
import {Chatbot} from "./Chatbot.tsx"
import {LuEraser, LuPenLine} from "react-icons/lu";
import {RiErrorWarningLine} from "react-icons/ri";
import {IoClose} from "react-icons/io5";


const tooltips = [
  {
    tooltipType: 'highlight',
    tooltipTitle: '중요한 부분에 밑줄을 쳐 주세요',
    tooltipContents: `태블릿 : 중요한 문장의 맨 앞을 꾹 눌러준 후, 밑줄치기가 나오면 드래그해주세요`
      + <br/> + 'PC : 중요한 문장을 마우스로 클릭한 상태로 드래그해주세요.'
      + <br/> + '밑줄치기를 취소하려면 이미 밑줄이 쳐진 곳을 다시 드래그해주세요.'
  },
  {
    tooltipType: 'strikeThrough',
    tooltipTitle: '필요없는 부분을 지워 주세요.',
    tooltipContents: `태블릿 : 중요한 문장의 맨 앞을 꾹 눌러준 후, 밑줄치기가 나오면 드래그해주세요`
      + <br/> + 'PC : 중요한 문장을 마우스로 클릭한 상태로 드래그해주세요.'
      + <br/> + '지우기를 취소하려면 이미 지워진 곳을 다시 드래그해주세요.'
  }
]
const questionFullCount = 10

interface Props {
  category: string;
}

export const ProjectChatbot: FunctionComponent<Props> = ({category}) => {
  const [questionCount, setQuestionCount] = useState(0)
  const [selectToolTip, setSelectToolTip] = useState({type: '', isShow: false})
  const [formatMode, setFormatMode] = useState<'highlight' | 'strikeThrough' | 'normal'>('normal')
  const CountNumberOfQuestion = (num: number) => {
    setQuestionCount(num)
  }
  
  const handleCloseTooltip = (type: string) => {
    setSelectToolTip({type: type, isShow: false})
    setFormatMode('normal')
  }
  
  const handleOpenTooltip = (type: string) => {
    setSelectToolTip({type: type, isShow: true})
    if(type === 'highlight'){
      setFormatMode('highlight')
    } else {
      setFormatMode('strikeThrough')
    }
  }
  return (
    <>
      <div className={'w-full h-full p-5 border border-black rounded-xl '}>
        <div className={'flex justify-between bg-gray-200 p-4 rounded-xl text-blue-500'}>
          <p>{`선택한 미션 키워드 : ${category} | AI 질문 기회는 총 10번! 신중하게 질문해 보세요!`} </p>
          <p>{'사용 질문 횟수 '}<strong className={'text-red-600'}>{`${questionCount}`}</strong>{`/${questionFullCount}`} </p>
        </div>
        <div>
          <Chatbot data={category} onCount={CountNumberOfQuestion} questionCount={questionFullCount} formatMode={formatMode}/>
        </div>
      </div>
      <div className={'relative flex gap-3 py-4'}>
        <button className={'flex gap-2 items-center border border-black bg-[#F3F4F6] rounded-lg py-1 px-2'} onClick={() => handleOpenTooltip('highlight')}>
          <LuPenLine/>밑줄치기
        </button>
        <button className={'flex gap-2 items-center border border-black bg-[#F3F4F6] rounded-lg py-1 px-2'} onClick={() => handleOpenTooltip('strikeThrough')}>
          <LuEraser/>지우기
        </button>
        <div className={'absolute flex gap-2 -top-[200px] text-[14px] text-left leading-5 -tracking-[0.5px]'}>
          {tooltips.map(tooltip => {
            return <div key={tooltip.tooltipTitle}>
              <div className={`relative flex-col w-[20%] p-5 bg-black text-white rounded-2xl ${selectToolTip.type === tooltip.tooltipType  && selectToolTip.isShow ? '' : 'hidden'}`}>
                <div>
                  <p className={'font-extrabold mb-2'}>{tooltip.tooltipTitle}</p>
                  <p>{tooltip.tooltipContents}</p>
                </div>
                <div className={'absolute top-4 right-4'} onClick={() => handleCloseTooltip(tooltip.tooltipType)}>
                  <IoClose className={'w-5 h-5'}/>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className={'flex items-center py-2'}>
        <RiErrorWarningLine/>
        <p>필요한 정보는 밑줄을 쳐서 보관하고, 불필요한 정보는 지우개로 지워보세요!</p>
      </div>
    </>
  )
}