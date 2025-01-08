import { FunctionComponent } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

const MainLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-full min-h-screen no-scrollbar">
      <Header/>
      <main className="pretendard-bold flex-1 w-full mt-[120px]">
        <div className="container w-[70%] mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
