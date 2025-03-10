import {FunctionComponent, useState} from "react";
import {getByteLength} from "../../utils/getByteLength.ts";

export const ProjectStep6: FunctionComponent = () => {
  const [canAnswer, setCanAnswer] = useState(false)
  const [input, setInput] = useState('')
  const roleTag = ['분석/개발/조립', '디자인/홍보/맞춤 컨설팅', '기타[직접입력)'];
  const handleAnswer = (idx: number) => {
    if(idx === 3){
      setCanAnswer(!canAnswer)
    }
  }
  
  return (
    <div>
      <div className={'w-full bg-gray-100 text-left p-5'}>
        <p>내가 발견한 문제상황</p>
        <div className={'bg-blue-300 p-4'}>
          <p className={'text-[20px] text-blue-500 font-extrabold'}>우주 로봇은 어떤 장점이 있을까?</p>
        </div>
      </div>
      <div className={'w-full text-left p-5'}>
        <p>질문1. 여러분만의 색깔로 참여한 우주 탐사 로봇 개발, 어떤 역할을 맡았나요</p>
        {roleTag.map((tag,idx) => {
          return (<span className={'bg-gray-300 px-4 py-2 m-2'} onClick={() => handleAnswer(idx)}>
            {tag}
          </span>)
        })}
        <div className={'flex flex-col justify-end items-end'}>
          <p>{`${getByteLength(input)}/200`}</p>
          <input readOnly={canAnswer} placeholder={'답변을 입력해주세요'} className={'border border-black w-full'} onChange={(e) => setInput(e.target.value)}/>
        </div>
      </div>
      <div className={'w-full text-left p-5'}>
        <p>질문 2. 내가 수집한 아이디어와 가장 먼저 협업하여 아이디어를 더하고 싶은 내용은 무엇인가요?</p>
        <div className={'flex flex-col justify-end items-end'}>
          <p>{`${getByteLength(input)}/200`}</p>
          <input readOnly={canAnswer} placeholder={'답변을 입력해주세요'} className={'border border-black w-full'} onChange={(e) => setInput(e.target.value)}/>
        </div>
      </div>
      <div className={'w-full text-left p-5'}>
        <p>질문 3. 아이디어로 완성된 우주 탐사 로봇에 대한 설명을 작성해 보세요.</p>
        <div className={'flex flex-col justify-end items-end'}>
          <p>{`${getByteLength(input)}/200`}</p>
          <input readOnly={canAnswer} placeholder={'답변을 입력해주세요'} className={'border border-black w-full'} onChange={(e) => setInput(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}