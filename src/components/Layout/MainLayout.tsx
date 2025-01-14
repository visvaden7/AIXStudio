import { FunctionComponent } from 'react';
import {Outlet, useLocation} from "react-router-dom";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

const MainLayout: FunctionComponent = () => {
  const location = useLocation()
  const backgroundColor: Record<string, string>  = {
    '/project':'bg-gradient-to-b from-[#FFF5D9] to-transparent to-20%',
    '/portfolio':'bg-gradient-to-b from-[#EBFFF7] to-transparent to-20%',
    '/aixlab':'bg-gradient-to-b from-[#FFF0F2] to-transparent via-[#FFF0F2]/20',
    '/':'bg-transparent'
  }
  const bgClass = backgroundColor[location.pathname] || 'bg-transparent';
return (
    <div className="flex flex-col w-full min-h-screen no-scrollbar">
      <Header/>
      <main className={`font-nanumSquareRound flex-1 w-full ${bgClass} pt-20`}>
        <div className="container w-[70%] mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
