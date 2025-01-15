import {FunctionComponent} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {backgroundAssetColor, backgroundColor, backgroundImg} from "../../const/layout.ts";

const MainLayout: FunctionComponent = () => {
  const location = useLocation()
  const bgClass = backgroundColor[location.pathname] || 'bg-transparent';
  const bgUrl = backgroundImg[location.pathname]
  const bgColor = backgroundAssetColor[location.pathname]
  return (
    <div className="flex flex-col w-full min-h-screen no-scrollbar">
      <Header/>
      <main className={`font-nanumSquareRound flex-1 w-full ${bgClass} pt-20`}>
        <div
          className="container relative w-[70%] mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          {bgUrl && <div className={'absolute top-10 left-[50%]'}>
              <img src={bgUrl} alt={'polygon 1'} className={''}/>
          </div>}
          {bgColor && <div className={`absolute -top-[11%] right-[2%] w-[20%] aspect-square border-[80px] ${bgColor} rounded-full`}></div>}
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
