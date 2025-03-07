import {motion} from "motion/react";
import {FunctionComponent, MouseEvent, useEffect, useRef, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useUserStore} from "../../store/useUserStore.ts";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";

export const Header: FunctionComponent = () => {
  const location = useLocation()
  const [isTransparency, setIsTransparency] = useState(false)
  const [isRegisterPage, setIsRegisterPage] = useState(location.pathname !== '/register')
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)
  const prevScrollY = useRef(window.scrollY)
  const {user} = useUserStore()
  
  useEffect(() => {
    setIsRegisterPage(location.pathname === '/register')
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 50;
      if (currentScrollY <= scrollThreshold) {
        setIsTransparency(false)
      } else {
        setIsTransparency(currentScrollY > prevScrollY.current);
      }
      prevScrollY.current = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  const isActiveBurgerMenu = window.innerWidth < 1025;
  const isActiveTab = location.pathname;
  
  const handleOpenBurgerMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  }
  
  
  const headerClass = `fixed w-screen h-20 font-nanumSquareRound font-bold transition-all duration-300 z-20 ${isTransparency ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-[#FFF]'} flex justify-center`;
  const containerClass = `container xl:w-[70%] sm:w-[95%] h-full flex items-center ${window.innerWidth <= 320 ? 'justify-around' : 'justify-between'} bg-transparent`;
  const navItemClass = 'nav-item flex flex-1 gap-5 justify-center items-center text-[20px] leading-[30px]';
  const loginClass = 'login xl:w-[30%] md:w-[15%] sm:w-[40%] text-[16px] sm:text-[14px] py-5';
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
        <div className={'flex logo-wrap xl:w-[218px] md:w-[30%] sm:w-[45%] h-full flex-shrink-0 items-center py-5'}>
          <Link to={'/'}><img src={'/logo/header-logo.png'} alt={'AIX STUDIO logo'}/></Link>
        </div>
        {window.innerWidth > 1024 && <div className={navItemClass}>
          {navItem.map(it => (
            <li key={it.id} className={'relative flex h-full md:text-[16px] items-center'}>
              <NavLink to={it.path}
                       className={`${isActiveTab === it.path ? 'text-[#EF4A60] font-extrabold' : 'font-bold'} py-5`}>
                {it.label}
              </NavLink>
              {isActiveTab === it.path && (
                <motion.div className={'absolute -bottom-1 w-full h-1 bg-[#EF4A60] z-10'} layoutId="underline"/>
                // <div className={'absolute bg-[#EF4A60] w-full h-1 z-10 bottom-0'}></div>
              )}
            </li>
          ))}
        </div>}
        {user.id
          ?
          <div className={'flex justify-end gap-5 items-center 2xl:w-[18%] xl:w-[30%] md:w-[40%] sm:w-[50%] md:text-[16px] sm:text-[14px] py-5'}>
            <span className={'md:flex sm:hidden'}>{`${user.id}님`}</span>
            <Link to={'/'} className='flex items-center'>
              <div className={'w-[100px] border border-gray-300 px-4 py-2 mr-3 rounded-3xl'}>
                <span>로그아웃</span>
              </div>
              {isActiveBurgerMenu ? <RxHamburgerMenu className={'text-[30px]'} onClick={handleOpenBurgerMenu}/> : null}
            </Link>
          </div>
          : !isRegisterPage && <div className={loginClass}>
            <Link to={'/register'}>
                <div className={'flex justify-between md:justify-end sm:justify-around items-center gap-3'}>
                    <div className={'w-[145px] border border-gray-300 sm:px-[10%] md:px-[7%] sm:py-[6%] md:py-[4%] md:mr-4 sm:mr-0 rounded-3xl'}>
                        <span>로그인</span>
                    </div>
                  {isActiveBurgerMenu ?
                    <RxHamburgerMenu className={'text-[60px]'} onClick={handleOpenBurgerMenu}/> : null}
                </div>
            </Link>
        </div>
        }
      </div>
      {isOpenBurgerMenu && <div className={'fixed top-0 left-0 w-screen h-screen bg-black/50'}>
          <div className={'flex flex-col items-end'}>
              <div className={'w-[80%] h-screen bg-white'}>
                  <div className={'flex justify-end p-3'}>
                      <IoClose onClick={handleOpenBurgerMenu}/>
                  </div>
                  <div className={''}>
                      <ul className={'flex flex-col items-start gap-5 p-[10%]'}>
                        {navItem.map((menu) => {
                          return <Link to={menu.path} onClick={() => setIsOpenBurgerMenu(false)}>
                            <p>{menu.label}</p>
                          </Link>;
                        })}
                      </ul>
                  </div>
              </div>
          </div>
      </div>}
    </header>
  
  
  )
}