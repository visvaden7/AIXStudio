import * as section5 from "../../../assets/pages/about/section5";
import {validatePhoneNumber} from "../../../utils/validate.ts";
import {PrivacyPolicyModal} from "../../Modal/privacyPolicyModal.tsx";
import {ChangeEvent, FormEvent, FunctionComponent, useState} from "react";
import {FormData} from "../../../@types/domain.ts";
import axios from "axios";

export const Section5ByContact:FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    school: "",
    phone: "",
    email: "",
    agree: false,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target
    console.log('name', name, value, type, checked)
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.agree) {
      alert("개인정보 수집에 동의해주세요.");
      return;
    }
    
    try {
      const response = await axios.post("https://your-api-endpoint.com/contact", formData);
      console.log("✅ 제출 성공:", response.data);
      alert("문의가 성공적으로 제출되었습니다!");
    } catch (error) {
      console.error("❌ 제출 오류:", error);
      alert("문의 제출에 실패했습니다.");
    }
  };
  return (
    <div className={'flex w-screen h-screen justify-center items-center'}>
      {/*image part*/}
      <div className={'flex w-[70%] justify-center'}>
        <div className={'flex-1 text-left'}>
          <div className={'flex flex-col text-[#111] text-[56px] font-extrabold'}>
            <p>AiX STUDIO가</p>
            <p>궁금하신가요?</p>
            <p className={'text-[#666] text-[20px] font-normal leading-[150%] tracking-[0.5px]'}>
              연락처를 남겨주시면, 바로 답변 드릴게요
            </p>
          </div>
          <div className={'flex mt-[15%]'}>
            <img src={section5.sittingGirl2} alt={'sitting girl'} className={'absolute'}/>
            <img src={section5.webPage} alt={'webpage'} className={'absolute left-[14%]'}/>
          </div>
        </div>
        {/*input part*/}
        <div className={'flex-1 font-nanumSquareRound text-left'}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[20px] font-bold leading-[150%] -tracking-[0.5px] py-3">
                <p>이름<span className={'text-[#EF4A60]'}> *</span></p>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="신청하시는 분의 성명을 입력해주세."
                className="w-full px-[24px] py-[18px] border border-[#C3C3CB] rounded-[16px]"
                required
              />
            </div>
            <div>
              <label className="block text-[20px] font-bold leading-[150%] -tracking-[0.5px] py-3">
                <p>학교/교육기관<span className={'text-[#EF4A60]'}> *</span></p>
              </label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="재학중인 학교/교육기관명을 입력해주세요."
                className="w-full px-[24px] py-[18px] border border-[#C3C3CB] rounded-[16px]"
                required
              />
            </div>
            
            <div>
              <label className="block text-[20px] font-bold leading-[150%] -tracking-[0.5px] py-3">
                <p>연락처<span className={'text-[#EF4A60]'}> *</span></p>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="연락처를 입력해주세요."
                className={`w-full px-[24px] py-[18px] border ${validatePhoneNumber(formData.phone) ? 'border-[#C3C3CB]' : 'border-[rgb(255, 69, 94)]'} rounded-[16px]`}
                required
              />
            </div>
            
            <div>
              <label className="block text-[20px] font-bold leading-[150%] -tracking-[0.5px] py-3">
                <p>이메일<span className={'text-[#EF4A60]'}> *</span></p>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요."
                className="w-full px-[24px] py-[18px] border border-[#C3C3CB] rounded-[16px]"
                required
              />
            </div>
            
            <div className="flex items-center pt-5 pb-10">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className={`mr-2 w-[25px] aspect-square rounded-[5px] border-2 border-gray-400 appearance-none cursor-pointer transition
              ${formData.agree ? 'bg-[#FFE552] border-[#FFD700] before:content-["✔️"] before:text-white before:text-[14px] before:flex before:justify-center before:items-center' : 'bg-white border-gray-400'}`}
              />
              <label className="text-[#111] text-[16px] font-normal leading-[150%] -tracking-[0.5px]">
                <span className={'font-bold underline decoration-1'} onClick={() => setIsModalOpen(true)}>개인정보 수집 및 이용</span>에 동의합니다. (필수)
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#FFE552] text-[18px] text-[#111] font-bold p-3 rounded-[12px] hover:text-[20px] transition"
            >
              <span>문의하기</span>
            </button>
          </form>
          <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </div>
  )
}