import {FunctionComponent} from "react";

export const Footer: FunctionComponent = () => {
  return (
    <footer className={'bg-black text-white'}>
      <div className={'flex flex-col w-[70%] mx-auto text-left'}>
        <div>
          <img src={'https://placehold.co/150'} alt={'AIX 로고'}/>
        </div>
        <p>(주)렛츠립업</p>
        <div className={'flex gap-5 mb-10'}>
          <p>주소 : 제주특별자치도 제주시 일주동로 324, 2층</p>
          <p>대표자 : 김희영</p>
          <p>사업자등록번호 : 899-87-03465</p>
        </div>
        <p>ⓒ 렛츠립업. All rights reserved.</p>
      </div>
    </footer>
  )
}