import {FunctionComponent, useMemo, useState, ChangeEvent, useCallback} from "react";
import {ValidCardCarousel} from "../Card/ValildCardCarousel.tsx";
import {useProjectStore} from "../../store/useProjectStore.ts";
import {subjectClass, titleClass} from "../../const/const.ts";
import {ProgressBar} from "../ProgressBar.tsx";
import {getByteLength} from "../../utils/getByteLength.ts";

export const ProjectStep5: FunctionComponent = () => {
  const currentStep = useProjectStore(state => state.currentStep)
  const message = useProjectStore(state => state.chatMessage)
  const chatbotMessages = useMemo(() => {
    return message.filter(msg => msg.role === 'ai').map((msg, idx) => {
      return {id: idx, role: msg.role, content: msg.content, timeStamp: '', isValid: false}
    })
  }, [message])
  const [input, setInput] = useState('')
  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const maxByte = 100;
    if(getByteLength(input) <= maxByte) {
      setInput(e.target.value)
    }
  },[input])
  
  return (
    <div>
      <div className={'flex-col text-left'}>
        <p className={titleClass}>정보수집 with AI</p> {/*서브타이틀1*/}
        <p className={subjectClass}>문제 분석을 위해 필요한 정보를 AI 에게 신중하게 질문하며 확인해보세요!</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      <div className={'text-left'}>
        <p className={'font-bold text-[20px]'}>검증완료한 정보</p>
        <ValidCardCarousel cardList={chatbotMessages} itemsPerPage={3} label={''}/>
      </div>
      <div>
        <p className={'font-bold text-[20px] text-left'}>수집한 키워드</p>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          overflow: 'hidden',
          border: `1px solid black`,
          borderRadius: '30px'
        }}>
          {([
            ["식물", 4], ["환경", 2], ["생태계", 1], ["미관", 1], ["공기", 1],
            ["질", 1], ["결과", 1], ["이산화탄소", 1], ["산소", 1], ["생물", 1]
          ] as [string, number][]).map(([word, weight], index) => {
            let isOverlapping: boolean;
            let top: number, left: number;
            
            const generatePosition = () => {
              const randomTop = Math.floor(Math.random() * 85); // Random top percentage
              const randomLeft = Math.floor(Math.random() * 85); // Random left percentage
              return {top: randomTop, left: randomLeft};
            };
            
            const randomFontSize = 10 + weight * 20; // Font size based on weight
            const color = weight >= 3 ? `rgb(${200 + weight * 10}, ${50 + weight * 5}, ${50})` : `hsl(${Math.random() * 360}, 70%, 70%)`; // Red family for higher weight
            
            const renderedWords = new Set<[number, number, number]>();
            
            do {
              const position = generatePosition();
              top = position.top;
              left = position.left;
              
              isOverlapping = Array.from(renderedWords).some(([prevTop, prevLeft, prevFontSize]) => {
                const distance = Math.sqrt(Math.pow(prevTop - top, 2) + Math.pow(prevLeft - left, 2));
                return distance < (randomFontSize / 2 + prevFontSize / 2); // Check if overlapping
              });
            } while (isOverlapping);
            
            renderedWords.add([top, left, randomFontSize]);
            
            return (
              <span
                key={index}
                style={{
                  position: 'absolute',
                  fontSize: `${randomFontSize}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  transform: 'translate(-50%, -50%)',
                  color: color,
                  whiteSpace: 'nowrap',
                }}
              >
        {word}
      </span>
            );
          })}
        </div>
        <div>
          <p className={'font-bold text-[20px] text-left'}>문제정의</p>
          <div className={'font-bold text-[20px] text-left border border-black p-4'}>
            <p className={'text-[32px] text-blue-700'}>내가 발견한 문제상황을 한 문장으로 정의해보세요</p>
            <p>예시: 우주 행성 탐사에 꼭 필요한 기술은 무엇일까?</p>
            <div>
              <p className={'text-right'}>{`${getByteLength(input)}/100`}</p>
              <input type={'text'} className={'border w-full border-black '} onChange={handleInput}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}