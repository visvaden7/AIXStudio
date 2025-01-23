import {FunctionComponent} from "react";
import {subjectClass, titleClass} from "../../const/const.ts";
import {ProgressBar} from "../ProgressBar.tsx";
import {ValidCardCarousel} from "../Card/ValildCardCarousel.tsx";

interface Step4Props {
  currentStep: number;
}

const AIAnsweredList = [{
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}, {
  answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  timeStamp: '2024-10-25'
}]

export const ProjectStep4: FunctionComponent<Step4Props> = ({currentStep}) => {
  return (
    <div>
      <div className={'flex-col text-left'}>
        <p className={titleClass}>정보수집 with AI</p> {/*서브타이틀1*/}
        <p className={subjectClass}>문제 분석을 위해 필요한 정보를 AI 에게 신중하게 질문하며 확인해보세요!</p> {/*서브타이틀2*/}
      </div>
      <div>
        <ProgressBar currentStep={currentStep} totalStep={5}/>
      </div>
      <div className={'flex-col border border-black/30 rounded-3xl'}>
        <div>
          <ValidCardCarousel cardList={AIAnsweredList} itemsPerPage={3} label={'수집한 정보'}/>
        </div>
        <div className={'flex flex-col gap-5 text-left p-10'}>
          <p>정보 검증</p>
          <div>
            <div className={'font-bold text-[24px]'}>질문</div>
            <div className={'border border-black rounded-2xl p-4 mt-3'}>
              <p>우주 로봇 개발에 대해 알려줘</p>
            </div>
          </div>
          <div>
            <div className={'font-bold text-[24px]'}>
              대답
            </div>
            <div className={'border border-black rounded-2xl p-4 mt-3'}>
            <p className={'flex-wrap'}>우주 로봇 개발에는 몇 가지 핵심 단계가 포함돼. 1. 임무 목표와 요구사항 정의. 2.방사선, 극한 온도 및 진공 조건을 고려하여 혹독한
                우주
                환경에 맞게 설계. 3. 가볍고 내구성있는 소재 우선. 4. 자율성과 적응성을 위한 고급 AI 구현. 5. 신뢰할 수 있는 통신 시스템 보장. 6. 시뮬레이션 및 진공 챔버를 포함한
                엄격한
                테스트 수행. 7.유지 관리 및 잠재적 수리 계획. 8.국제 우주 기관 및 전문가와 협력하여 지식과 리소스를 공유.</p>
            </div>
          </div>
          
          <div className={'flex gap-2 py-4 justify-center'}>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}>검중하기</button>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}>수정하기</button>
            <button className={'flex-1 border border-black/30 rounded-2xl p-4'}>검증완료</button>
          </div>
        </div>
      </div>
    </div>
  )
}