import {FunctionComponent, useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";

export const Header: FunctionComponent = () => {
  const location = useLocation()
  const [isTransparency, setIsTransparency] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparency(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // 이벤트 리스너 정리
    };
  }, []);
  
  useEffect(() => {
    if (location.pathname !== '/') {
      setIsTransparency(false)
    }
  }, [location]);
  
  const isActiveTab = location.pathname;
  
  const headerClass = `fixed w-screen transition-all duration-300 ${isTransparency ? 'bg-transparent' : 'bg-amber-100'}`;
  const containerClass = 'container w-[70%] min-h-full flex justify-center bg-pink-400 mx-auto';
  const navItemClass = 'nav-item flex flex-1 gap-2 justify-center items-center';
  const loginClass = 'login w-[20%] py-10 border-l-black';
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
        <div className={'logo-wrap w-[25%] h-full py-10'}>
          <Link to={'/'}>로고</Link>
        </div>
        <div className={navItemClass}>
          {navItem.map(it => (
            <li key={it.id} className={'relative flex h-full items-center'}>
              <NavLink to={it.path} className={`p-5`}>
                {it.label}
              </NavLink>
              {isActiveTab === it.path && (
                <div className={'absolute bg-blue-400 w-full h-1 z-10 bottom-0'}></div>
              )}
            </li>
          ))}
        </div>
        <div className={loginClass}>
          <button>로그인</button>
        </div>
      </div>
    </header>
  
  
  )
}