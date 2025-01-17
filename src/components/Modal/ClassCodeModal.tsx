import {Modal} from "./Modal.tsx";
import {FunctionComponent} from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const ClassCodeModal: FunctionComponent<Props> = ({isOpen, onClose, className}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <div className={'flex flex-col gap-7 text-left'}>
        <p className={'text-[24px] font-extrabold mb-5'}>클래스코드 입력</p>
        <p className={'text-[18px]'}>참여하고자 하는 클래스 코드를 입력해 주세요</p>
        <div>
          <input type={'text'} placeholder={'클래스 코드를 입력해주세요'} className={'w-full border-b-2 border-[#C7C5BD]'}/>
        </div>
        
        <div className={'flex w-full gap-2'}>
          <button type='button' className={'flex-1 bg-[#E9E9E9] p-2 rounded-xl'} onClick={onClose}>취소</button>
          <button type='button' className={'flex-1 bg-[#FFE552] p-2 rounded-xl'} onClick={() => alert('개발 중입니다.')}>확인
          </button>
        </div>
      </div>
    </Modal>
  )
}