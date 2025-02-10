import {motion} from "motion/react";
import {FunctionComponent, useEffect, useRef, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";

export const Header: FunctionComponent = () => {
  const location = useLocation()
  const [isTransparency, setIsTransparency] = useState(false)
  const isRegisterPage = location.pathname !== '/register'
  const prevScrollY = useRef(window.scrollY)
  //TODO: scroll 기능이 정상적으로 작동하지 않아, 처음 들어왔을 때 메뉴가 안 보임
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsTransparency(currentScrollY > prevScrollY.current);
      prevScrollY.current = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  
  const isActiveTab = location.pathname;
  
  const headerClass = `fixed w-screen h-20 font-nanumSquareRound font-bold transition-all duration-300 z-20 ${isTransparency ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-[#FFF]'}`;
  const containerClass = `container w-[70%] h-full flex items-center justify-center bg-transparent mx-auto`;
  const navItemClass = 'nav-item flex flex-1 gap-5 justify-center items-center text-[20px] leading-[30px]';
  const loginClass = 'login w-[10%] font-[16px] py-5';
  const navItem = [
    {
      id: 1,
      label: 'About AIX',
      path: '/about'
    },
    {
      id: 2,
      label: 'PROJECT',
      path: '/project'
    },
    {
      id: 3,
      label: 'PORTFOLIO',
      path: '/portfolio'
    },
    {
      id: 4,
      label: 'AIX LAB',
      path: '/aixlab'
    },
  ]
  
  return (
    <header
      className={headerClass}>
      <div className={containerClass}>
        <div className={'flex logo-wrap w-[218px] h-full flex-shrink-0 items-center py-5'}>
          <Link to={'/'}><img src={'/logo/header-logo.png'} alt={'AIX STUDIO logo'}/></Link>
        </div>
        <div className={navItemClass}>
          {navItem.map(it => (
            <li key={it.id} className={'relative flex h-full items-center'}>
              <NavLink to={it.path}
                       className={`${isActiveTab === it.path ? 'text-[#EF4A60] font-extrabold' : 'font-bold'} py-5` }>
                {it.label}
              </NavLink>
              {isActiveTab === it.path && (
                <motion.div className={'absolute -bottom-1 w-full h-1 bg-[#EF4A60] z-10'} layoutId="underline"/>
                // <div className={'absolute bg-[#EF4A60] w-full h-1 z-10 bottom-0'}></div>
              )}
            </li>
          ))}
        </div>
        {isRegisterPage && <div className={loginClass}>
          <Link to={'/register'}>
              <div className={'border border-gray-300 p-[2px] rounded-2xl'}>
                  로그인
              </div>
          </Link>
        </div>}
      </div>
    </header>
  
  
  )
}