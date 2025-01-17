import {Modal} from "./Modal.tsx";
import {FunctionComponent} from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  surveyUrl?: string
  className: string;
}

export const SurveyModal:FunctionComponent<Props> = ({isOpen, onClose, surveyUrl='', className}) => {
  const onSurvey = (url: string) => {
    try {
      new URL(url)
      window.open(url, '_blank', 'noopener, noreferrer')
    } catch {
      alert('잘못된 URL을 입력하셨습니다.')
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <div>
        <div className={'flex flex-col gap-7 text-left'}>
          <p className={'text-[24px] font-extrabold mb-5'}>설문지 작성</p>
          <p className={'text-[18px] leading-7 -tracking-[0.5px]'}>아래 버튼을 통해 설문지 작성에 참여 해주세요</p>
          <div className={'flex w-full gap-2'}>
            <button type='button' className={'flex-1 bg-[#FFE552] p-2 rounded-xl'} onClick={() => onSurvey(surveyUrl)}>
              설문지작성
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}