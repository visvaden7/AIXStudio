import {IoArrowForwardSharp} from "react-icons/io5";
import * as section5img from '../../../assets/pages/main/section5'
import {projectList} from "../../../const/const.ts";
import {useMemo, useState} from "react";
import {Project} from "../../../@types/domain.ts";
import {GoArrowUpRight} from "react-icons/go";
import {motion} from "motion/react";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";

export const Section5ByProject = () => {
  const [showProject] = useState(1);
  const cardList = projectList
  const sortedData = useMemo(() => {
    let filtered = [...cardList];
    if (cardList.length > 0) {
      filtered = (filtered as Project[]).sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime())
    }
    return filtered.slice(0, 3);
  }, [cardList])
  const [displayedData, setDisplayedData] = useState<Project[]>(sortedData);
  const navigate = useNavigate()
  
  // 프로젝트 변경 함수
  const rotateRight = () => {
    setDisplayedData(prev => {
      if (prev.length === 0) return prev;
      const newArr = [...prev];
      const last = newArr.pop();
      if (last !== undefined) {
        newArr.unshift(last);
      }
      return newArr;
    });
  };
  
  const rotateLeft = () => {
    setDisplayedData(prev => {
      if (prev.length === 0) return prev;
      const newArr = [...prev];
      const first = newArr.shift();
      if (first !== undefined) {
        newArr.push(first);
      }
      return newArr;
    });
  };
  
  return (
    <div className={'absolute top-[1000vh] w-full h-screen flex z-10 bg-white justify-center'}>
      <img src={section5img.sittingGirl} alt={'sittingGirl'} className={'absolute -bottom-[3%] left-[7%] z-10'}/>
      <div className={'w-full h-screen flex justify-center overflow-hidden'}>
        <div className={'sticky top-0 left-0 flex flex-col w-[70%]'}>
          <img src={section5img.springGreen} alt={'springGreen'} className={'absolute top-[5%] right-[25%]'}/>
          {/*introduction*/}
          <div className={'flex w-full justify-between items-center mt-[130px]'}>
            <div className={'flex-col text-left'}>
              <p className={'relative font-nanumSquareRound font-extrabold leading-[140%] text-[48px] text-[#21272A]'}>
                <span>다양한 체험을 통해</span>
                <img src={section5img.idea} alt={'idea'} className={'absolute top-0 right-0 w-[14.28%]'}/>
              </p>
              <p className={'relative font-nanumSquareRound font-extrabold leading-[140%] text-[48px] text-[#21272A]'}>
                <span>창의성을 자랑해보세요</span>
                <img src={section5img.highlightCircle} alt={'highlightCircle'} className={'absolute top-0 -left-4'}/>
              </p>
            </div>
            <Link to={'/project'} className={'flex justify-around items-center p-5 rounded-3xl w-[15%] bg-[#FFE552]'}>
                <span className={'text-xl leading-[150%] -tracking-[0.5px]'}>
                  바로가기
                </span>
              <IoArrowForwardSharp/>
            </Link>
          </div>
          
          {/*Project*/}
          <div className={'relative w-full flex'}>
            {displayedData.map((project, idx) => {
              const position =
                showProject === idx
                  ? 'w-full'
                  : idx < showProject
                    ? "absolute w-[70%] -translate-x-[70%] opacity-50 mt-[13%]"
                    : "absolute w-[70%] translate-x-[160%] opacity-50 mt-[13%]"
              return (
                <motion.div
                  key={'project_' + idx}
                  transition={{duration: 0.5, ease: "easeInOut"}}
                  className={`flex gap-10 ${position} mt-[5%] `}>
                  <div className={'w-[50%] aspect-video'}>
                    {/*프로젝트 이미지 입력하기*/}
                    <img src={project.imgUrl} alt={project.subTitle}
                         className={'w-full aspect-4/3 object-cover rounded-3xl'}/>
                  </div>
                  <div
                    className={`flex flex-col gap-[10%] w-[40%] justify-center text-left ${showProject !== idx ? 'hidden' : ''}`}>
                    {/*프로젝트 정보 노출*/}
                    <p className={'text-[#111] text-[20px] font-bold leading-[150%] -tracking-[0.5px]'}>PROJECT</p>
                    <div className={'flex flex-col gap-2'}>
                      <div>
                      <span
                        className={'text-[16px] text-[#111] font-bold leading-[150%] -tracking-[0.5px] py-1 px-2 bg-[#FFF5D5] rounded-xl'}>
                        {project.type}
                      </span>
                      </div>
                      <p
                        className={'text-[#111] text-[32px] font-bold leading-[150%] -tracking-[0.32px]'}>{project.titleKo}</p>
                      <p className={'text-[#999] text-[20px] font-bold leading-[150%]'}>{project.titleEn}</p>
                    </div>
                    <div className={'flex gap-2 items-center'} onClick={() => navigate('/project', { state: { project: project } })}>
                      <span className={'text-[#111] text-[18px] font-bold leading-[150%] -tracking-[0.5px]'}>바로가기</span>
                      <div className={'flex justify-center items-center bg-black w-8 aspect-square rounded-full'}>
                        <GoArrowUpRight className={'text-white'}/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
            <div className={'flex-col gap-10 items-center mt-[10%] pl-10'}>
              {/*프로젝트 네비게이션*/}
              <div className={'flex flex-col gap-10 h-full justify-center'}>
                <motion.button
                  whileHover={{scale: 1.1, background: '#FFE552'}}
                  whileTap={{scale: 0.9}}
                  onClick={rotateRight}
                  className="p-6 bg-gray-300 rounded-full text-[32px]"
                >
                  <MdOutlineKeyboardArrowRight/>
                </motion.button>
                <motion.button
                  whileHover={{scale: 1.1, background: '#FFE552'}}
                  whileTap={{scale: 0.9}}
                  onClick={rotateLeft}
                  className="p-6 bg-gray-300 rounded-full text-[32px]"
                >
                  <MdOutlineKeyboardArrowLeft/>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}