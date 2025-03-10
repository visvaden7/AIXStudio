import {Portfolio, Project, ValidText} from "../../@types/domain.ts";
import {FunctionComponent, useEffect, useMemo, useReducer, useState, useRef, TouchEvent} from "react";
import {pageReducer} from "../../reducer/reducer.ts";
import {ProjectModal} from "../Modal/ProjectModal.tsx";
import {ProjectCard} from "./ProjectCard.tsx";
import {isPortfolio, isProject, isValidText} from "../../utils/typeGuard.ts";
import {PortfolioCard} from "./PortfolioCard.tsx";
import upArrow_black from '../../assets/pages/aixLab/arrow_black.svg'
import bang from '../../assets/pages/aixLab/bang.gif'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {ValidCard} from "./ValidCard.tsx";
import {calculateMaxPage} from "../../utils/calculateMaxPage.ts";

interface Props {
  cardList: Project[] | Portfolio[] | ValidText[];
  itemsPerPage: number;
  label: string;
  onClick?: () => void;
}

export const CardCarousel: FunctionComponent<Props> = ({cardList, label, itemsPerPage, onClick}) => {
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const visiblePageCount = 3;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectProject, setSelectProject] = useState<Project>({
    idx: 0,
    titleKo: '',
    titleEn: '',
    subTitle: '',
    imgUrl: '',
    hash: [],
    type: '',
    story: '',
    isSurvey: false,
    surveyUrl: '',
    timeStamp: ''
  });
  
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = useRef<number>(0);
  
  const handleTouchMove = (e: TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    console.log(handleTouchEnd.current)
  };
  
  const handleTouchStartEvent = (e: TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientX;
    console.log(handleTouchStart.current)
  };
  
  const handleTouchEndEvent = () => {
    if (handleTouchStart.current - handleTouchEnd.current > 50) {
      dispatch({type: 'NEXTPAGE', maxPage});
    } else if (handleTouchStart.current - handleTouchEnd.current < -50) {
      dispatch({type: 'PREVPAGE', maxPage});
    }
  };
  
  const arrowStyle = 'absolute top-1/4 rounded-full p-4 transition duration-100 ease-in-out transform'
  const sortedData = useMemo(() => {
    let filtered = [...cardList];
    if (cardList.length > 0 && !isValidText(cardList[0])) {
      filtered = (filtered as (Project | Portfolio)[]).sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime())
    }
    return filtered;
  }, [cardList])
  
  const maxPage = useMemo(() => {
    return calculateMaxPage(sortedData, itemsPerPage)
  }, [sortedData, itemsPerPage])
  
  const visiblePages = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    let start = Math.max(0, currentPage - half);
    const end = Math.min(maxPage, start + visiblePageCount);
    if (end === maxPage && end - start < visiblePageCount) {
      start = Math.max(0, maxPage - visiblePageCount);
    }
    return [...Array(end - start).keys()].map(i => i + start)
  }, [currentPage, visiblePageCount, maxPage]);
  
  const getArrowBgColor = (direction: 'left' | 'right'): string => {
    if (direction === 'left') {
      return currentPage === 0 ? 'bg-[#EDEDED]' : 'bg-[#FFE552]';
    }
    return currentPage === maxPage - 1 ? 'bg-[#EDEDED]' : 'bg-[#FFE552]';
  };
  
  
  const pagedData = useMemo(() => {
    const startIndex = itemsPerPage * currentPage
    const endIndex = startIndex + itemsPerPage
    return sortedData.slice(startIndex, endIndex);
  }, [itemsPerPage, sortedData, currentPage])
  
  useEffect(() => {
    dispatch({type: 'GOTOPAGE', page: 0, maxPage: maxPage})
  }, [maxPage])
  
  useEffect(() => {
    if (currentPage >= maxPage) dispatch({type: 'GOTOPAGE', page: maxPage - 1, maxPage})
  }, [maxPage, currentPage])
  
  const handleSelectProject = (project: Project) => {
    console.log(project)
    setSelectProject(project)
    setIsModalOpen(true)
  }
  
  return (
    <div className={'w-full font-nanumSquareRound'}>
      <div className={'text-left mb-10 flex justify-between'}>
        <p className={'text-[28px] font-extrabold leading-10 -tracking-[0.5px]'}>{label}</p>
        {pagedData.length !== 0 && <div className={'flex gap-2 items-center'} onClick={onClick}>
            <p className={'text-[18px] font-bold'}>더보기</p>
            <div>
                <img src={upArrow_black} alt={'more contents'}/>
            </div>
        </div>}
      </div>
      {/*컨텐츠*/}
      {pagedData.length !== 0 ?
        <div className={'project'} ref={carouselRef} onTouchStart={handleTouchStartEvent} onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEndEvent}>
          <div className={'relative flex gap-5 flex-wrap justify-between sm:justify-start items-start'}>
            {pagedData.map((project, idx) => {
              if (isProject(project)) {
                return <ProjectCard key={`project-${idx}`} project={project}
                                    onClick={() => handleSelectProject(project)} hasSurvey={true}/>
              } else if (isPortfolio(project)) {
                return <PortfolioCard key={`portfolio-${idx}`} portfolio={project}/>
              } else if (isValidText(project)) {
                return <ValidCard key={`valid-${idx}`} validText={project} isValid={false} onClick={() => {
                }}/>
              }
            })}
            {selectProject &&
                <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectProject}/>
            }
            <div className={`${arrowStyle} -left-16 ${getArrowBgColor('left')}`}>
              <FiChevronLeft className={`text-[20px]`} onClick={() => dispatch({type: 'PREVPAGE', maxPage})}/>
            </div>
            <div className={`${arrowStyle} -right-16 ${getArrowBgColor('right')}`}>
              <FiChevronRight className={`text-[20px]`} onClick={() => dispatch({type: 'NEXTPAGE', maxPage})}/>
            </div>
          </div>
          {/*페이지네이션*/}
          <div className={'p-10'}>
            {/*페이지네이션 {currentPage + 1} / {maxPage}*/}
            <div className={'flex gap-3 justify-center items-center'}>
              {visiblePages.map(it => {
                return (
                  <div key={it} onClick={() => dispatch({type: 'GOTOPAGE', page: it, maxPage})}
                       className={`cursor-pointer transition duration-100 ease-in-out transform ${currentPage === it ? 'w-10 p-2 rounded-full bg-[#FFE552]' : 'w-2 p-2 aspect-square rounded-full bg-[#E4E4E4]'}`}>
                  </div>
                )
              })}
            </div>
          </div>
        </div> :
        <div>
          <div className={'flex flex-col gap-5 justify-center bg-white border border-[#D8D8E1] rounded-[60px] p-10'}>
            <img src={bang} alt={'bang'} className={'w-[10%] mx-auto'}/>
            <div className={'text-[18px] leading-7 -tracking-[0.5px]'}>
              <p className={'text-[#666]'}><strong className={'text-[#111]'}>{label}</strong>이 없습니다.</p>
              <p className={'text-[#666]'}>강사 선생님께 문의 해주세요</p>
            </div>
          </div>
        </div>}
    </div>
  )
}