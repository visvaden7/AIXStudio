import './App.css';
import MainLayout from "./components/Layout/MainLayout.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { Routes, Route } from "react-router-dom";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import {AboutPage} from "./pages/AboutPage.tsx";
import {ProjectPage} from "./pages/ProjectPage.tsx";
import {PortfolioPage} from "./pages/PortfolioPage.tsx";
import {AIXLabPage} from "./pages/AIXLabPage.tsx";
import {MyPage} from "./pages/MyPage.tsx";
import {NoticePage} from "./pages/NoticePage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/project" element={<ProjectPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/aixlab" element={<AIXLabPage/>} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/notice" element={<NoticePage/>} />
      </Route>
    </Routes>
  );
}

export default App;
