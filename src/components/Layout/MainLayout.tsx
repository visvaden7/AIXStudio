import { FunctionComponent } from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

const MainLayout: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex-1 w-full mt-[120px]">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
