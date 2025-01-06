import {FunctionComponent, useMemo, useReducer, useState} from "react";
import {Card} from "../components/Card.tsx";
import {IoArrowBack, IoArrowForward, IoReload, IoSearchOutline} from "react-icons/io5";
import {projectList} from "../const/const.ts";
import {PageReducerType, Project} from "../@types/domain.ts";

const reducer = (state: number, action: PageReducerType): number => {
  const {type, maxPage = 0, page} = action;
  switch (type) {
    case 'NEXTPAGE':
      return Math.min(state + 1, maxPage - 1);
    case "PREVPAGE":
      return Math.max(state - 1, 0)
    case 'GOTOPAGE':
      console.log('')
      return page !== undefined && page >= 0 && page < maxPage ? page : state;
    default:
      return state
  }
}

export const ProjectPage: FunctionComponent = () => {
  
  const [currentPage, dispatch] = useReducer(reducer, 0)
  const itemsPerPage = 3;
  const visiblePageCount = 5;
  
  const [data, setData] = useState<Project[]>(projectList) //TODO: 추후 API로 데이터 연결예정 / 현재 더미데이터
  
  const maxPage = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage)
  },[data, itemsPerPage])
  
  const pagedData = useMemo(() => {
    const startIndex = itemsPerPage * currentPage
    const endIndex = startIndex + itemsPerPage
    return data.slice(startIndex, endIndex);
  }, [data, currentPage])
  
  const visiblePages = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    const start = Math.max(0, currentPage - half);
    const end = Math.min(maxPage, start + visiblePageCount);
    return [...Array(end-start).keys()].map(i => i + start)
  },[currentPage, visiblePageCount, maxPage]);
  
  const activeClass = "font-bold text-red-400";
  const inactiveClass = "text-gray-600";
  
  return (
    <div className={'w-full font-pretendard'}>
      <div className={'flex text-left justify-between m-10'}>
        <div className={'flex flex-col'}>
          <p className={'text-[50px]'}>Project</p>
          <p className={'pretendard-extraBold text-[16px]'}>AiX STUDIO에서 참여할 수 있는 다양한 프로젝트를 확인해보세요.</p>
        </div>
        <div className={'flex w-[30%] gap-2 items-center'}>
          <div className={'relative w-full flex items-center'}>
            <input type={"text"} className={'w-full rounded-2xl border-black border-2 p-2'}
                   placeholder={'프로젝트 명을 입력해주세요'}/>
            <IoSearchOutline className={'absolute right-3'}/>
          </div>
          <IoReload className={'right-[-5%]'}/>
        </div>
      </div>
      
      <div className={'flex gap-10 flex-wrap justify-center'}>
        {JSON.stringify(pagedData)}
        {pagedData.map(project => {
          return <Card size={"small"} key={project.idx}>
            <div className={'flex flex-col text-left'}>
              <div className={'w-full'}>
                <img src={project.imgUrl} alt={project.title} className={'rounded w-full h-[250px] object-cover '}/>
              </div>
              <div className={'flex gap-1 p-4 text-center'}>
                <p className={'bg-pink-400 w-20 rounded-2xl font-pretendard'}>PROJECT</p><p
                className={'bg-orange-950 text-white w-20 rounded-2xl font-pretendard'}>{project.tag}</p>
              </div>
              <p>{project.title}</p>
              <p>{project.subTitle}</p>
            </div>
          </Card>
        })}
      </div>
      <div className={'p-10'}>
        페이지네이션 {currentPage + 1} / {maxPage}
        <div className={'flex gap-3 justify-center items-center'}>
          <IoArrowBack onClick={() => dispatch({type: 'PREVPAGE', maxPage})}/>
          {visiblePages.map(it => {
            return (
              <div key={it} onClick={() => dispatch({type: 'GOTOPAGE', page: it, maxPage})}
                   className={`cursor-pointer ${currentPage === it ? activeClass : inactiveClass}`}>
                {it + 1}
              </div>
            )
          })}
          <IoArrowForward onClick={() => dispatch({type: 'NEXTPAGE', maxPage})}/>
        </div>
      </div>
    </div>
  )
}