import { Modal } from "./Modal"
import {FunctionComponent} from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  
}

export const PrivacyPolicyModal:FunctionComponent<Props> = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={'w-[50%]'}>
      <div>
        <p>개발진행중</p>
        <p className={'text-[20px] font-extrabold'}>Optional Label<br/></p>
        <p>개인정보 수집 및 이용항목<br/>
        무료체험 신청 이용을 위하여 아래의 개인정보 수집·이용에 대한 내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.<br/>
        개인정보 수집 및 이용의 목적<br/>
        무료체험 서비스 제공 및 안내메일 발송<br/>
        2. 수집하는 개인정보 항목<br/>
        필수정보: 성명, 학교/교육기관 명, 연락처, 이메일<br/>
        수집한 개인정보의 보유·이용기간<br/>
        개인정보 수집 및 이용에 관한 동의 후 6개월간 개인정보를 보유하고 이후 해당 정보 지체없이 파기합니다.<br/>
        귀하는 위와 같은 개인정보 수집·이용에 동의하지 않을 수 있으며, 동의를 하지 않는 경우 무료체험 서비스 제공이 제한될 수 있습니다.<br/>
        </p>
      </div>
    </Modal>
  )
}