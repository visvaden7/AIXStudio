import {FunctionComponent} from "react";

export const Footer: FunctionComponent = () => {
  return (
    <footer className={' bg-[#F4F4F4] h-[15%] text-black'}>
      <div className={'flex flex-col w-[70%] mx-auto'}>
        <div className={'flex flex-col gap-5  text-left'}>
          <div className={'w-[196px] mt-[100px]'}>
            <img src={'/logo/footer-logo.png'} alt={'AIX 로고'}/>
          </div>
          <p><strong>(주)렛츠립업</strong></p>
          <div className={'flex gap-5 mb-5'}>
            <p>주소 : 제주특별자치도 제주시 일주동로 324, 2층</p>
            <p>대표자 : 김희영</p>
            <p>사업자등록번호 : 899-87-03465</p>
          </div>
        </div>
        <div className={'flex justify-between items-center py-10 border-t-black'}>
          <p>ⓒ 렛츠립업. All rights reserved.</p>
          <div className={'flex gap-5 font-bold'}>
            <p>개인정보처리</p>
            <p>이용약관</p>
            <p>공지사항</p>
          </div>
        </div>
      </div>
    
    </footer>
  )
}