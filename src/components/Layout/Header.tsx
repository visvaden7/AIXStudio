import {FunctionComponent, useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";

export const Header: FunctionComponent = () => {
  const location = useLocation()
  const [isTransparency, setIsTransparency] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY, "test")
      if (window.scrollY === 0) {
        setIsTransparency(true);
      } else {
        setIsTransparency(false)
      }
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
      className={`fixed w-screen transition-all duration-300 ${isTransparency ? 'bg-transparent' : 'bg-amber-100'}`}>
      <div className={'container w-[70%] min-h-full flex justify-center bg-pink-400 mx-auto'}>
        <div className={'logo-wrap w-[25%] h-full py-10'}>
          <Link to={'/'}>로고</Link>
        </div>
        <div className={'nav-item flex flex-1 gap-2 justify-center items-center'}>
          {navItem.map(it => {
            return (
              <ol>
                <li key={it.id}>
                  <NavLink
                    to={it.path}
                    className={({isActive}) =>
                      `p-5 ${isActive ? 'border-b-2 border-blue-500' : ''}`
                    }>
                    {it.label}
                  </NavLink>
                </li>
              </ol>
            )
          })}
        </div>
        <div className={'login w-[20%] py-10 border-l-black'}>
          <button>로그인</button>
        </div>
      </div>
    </header>
  
  
  )
}