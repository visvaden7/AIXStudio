import {motion} from "motion/react";
import {FunctionComponent, useState} from "react";
import {Link} from "react-router-dom";
import {IoMdEye, IoMdEyeOff} from "react-icons/io";

export const RegisterPage: FunctionComponent = () => {
  const [subCategoryId, setSubCategoryId] = useState('학생');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const labels = ['학생', '교사', '강사']
  const authProvider = [
    {provider: 'naver', path: '', label: '네이버 로그인'},
    {provider: 'kakao', path: '', label: '카카오 로그인'},
    {provider: 'google', path: '', label: '구글 로그인'}
  ]
  const categoryHandler = (label: string) => {
    setSubCategoryId(label)
  }
  
  const handleCheckPassword = () => {
    setIsVisiblePassword(!isVisiblePassword)
  }
  return (
    <div className={'text-left lg:w-[40%] md:w-[50%] mx-auto py-8 text-[16px] pretendard'}>
      <p className={'text-[24px] mb-5'}>로그인</p>
      
      <form action={'url'} method={'post'} onSubmit={(e) => {e.preventDefault()}}>
        <div className={'font-normal'}>
          <p>회원유형</p>
          {/*radio*/}
          <div className={'flex gap-5 mt-[10px] mb-[30px]'}>
            {labels.map((label) => {
              return <label>
                <input
                  type="radio"
                  value={label}
                  name="category"
                  onChange={() => categoryHandler(label)}
                  checked={subCategoryId == label}
                />
                {label}
              </label>
            })}
          </div>
        </div>
        {/*input div*/}
        <div className={'flex flex-col gap-5 text-center justify-center'}>
          <div>
            <input name={'user_id'} type={'text'} className={'w-full border border-gray-400 rounded-[10px] p-4'}
                   placeholder={'아이디를 입력해주세요'}/>
          </div>
          <div className={'relative'}>
            <input name={'user_pw'} type={`${isVisiblePassword ? 'text' : 'password'}`}
                   className={'w-full border border-gray-400 rounded-[10px] p-4'}
                   placeholder={'비밀번호를 입력해주세요'}/>
            <span className={'absolute right-[5%] top-[50%] -translate-y-1/2'}
                  aria-label={isVisiblePassword ? '비밀번호 숨기기' : '비밀번호 보이기'}
                  onClick={handleCheckPassword}>{isVisiblePassword ? <IoMdEye/> : <IoMdEyeOff/>}</span>
          </div>
          
          <motion.button type={"submit"} className={'p-4 bg-blue-500 text-white rounded-[10px]'}
                         transition={{duration: 0.3}}
          >로그인하기
          </motion.button>
          <div className={'flex gap-10 justify-center font-normal'}>
            <Link to={'/aixlab'}>아이디 찾기</Link> | <Link to={'/about'}>비밀번호 찾기</Link>
          </div>
        </div>
      </form>
      
      {/*divider*/}
      <div className={'relative py-3'}>
        <hr className={'w-full my-[20px]'}/>
        <p className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4'}>또는</p>
      </div>
      
      {/*sso login*/}
      <div className={'flex flex-col w-full gap-5'}>
        {authProvider.map((provider) => {
          return <button
            className={
              `p-4 rounded-[10px] ${provider.provider === 'naver'
                ? 'border border-lime-500 text-lime-500'
                : provider.provider === 'kakao'
                  ? 'border border-yellow-500 text-yellow-500'
                  : 'border border-blue-500 text-blue-500'}`
            }>{provider.label}</button>
        })}
      </div>
      <div className={'mt-5 text-center'}>
        <Link to={'/'}>AIX STUDIO 회원가입</Link>
      </div>
    </div>
  )
}