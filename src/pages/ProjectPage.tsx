import {FunctionComponent, useMemo, useReducer, useState} from "react";
import {Card} from "../components/Card.tsx";
import {IoArrowBack, IoArrowForward, IoReload, IoSearchOutline} from "react-icons/io5";
import {projectList} from "../const/const.ts";
import {Project} from "../@types/domain.ts";
import {pageReducer} from "../const/reducer.ts";
import {ProjectModal} from "../components/Modal/ProjectModal.tsx";

export const ProjectPage: FunctionComponent = () => {
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const itemsPerPage = 3;
  const visiblePageCount = 5;
  
  const [data] = useState<Project[]>(projectList) //TODO: 추후 API 로 데이터 연결예정 / 현재 더미데이터
  
  const [input, setInput] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectProject, setSelectProject] = useState<Project>({idx: 0, title: '', subTitle: '', imgUrl: '', tag:'카드뉴스'})
  
  const sortedData = useMemo(() => {
    if (input.length > 0) return data.filter(data => data.title.includes(input))
    return data;
  }, [data, input])
  
  // pageNation
  const maxPage = useMemo(() => {
    return Math.max(1, Math.ceil(sortedData.length / itemsPerPage))
  }, [sortedData, itemsPerPage])
  
  const visiblePages = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    const start = Math.max(0, currentPage - half);
    const end = Math.min(maxPage, start + visiblePageCount);
    return [...Array(end - start).keys()].map(i => i + start)
  }, [currentPage, visiblePageCount, maxPage]);
  
  const pagedData = useMemo(() => {
    const startIndex = itemsPerPage * currentPage
    const endIndex = startIndex + itemsPerPage
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage])
  
  const onReset = () => {
    setInput('')
  }
  
  const handleSelectProject = (project: Project) => {
    setSelectProject(project)
    setIsModalOpen(true)
  }
  
  const activeClass = "font-bold text-red-400";
  const inactiveClass = "text-gray-600";
  
  return (
    <div className={'w-full font-pretendard'}>
      <div className={'flex text-left justify-between m-10'}>
        <div className={'flex flex-col'}>
          <p className={'text-[50px]'}>Project</p>
          <p className={'pretendard-extraBold text-[16px]'}>AiX STUDIO 에서 참여할 수 있는 다양한 프로젝트를 확인해보세요.</p>
        </div>
        <div className={'flex w-[30%] gap-2 items-center'}>
          <div className={'relative w-full flex items-center'}>
            <input type={"text"} className={'w-full rounded-2xl border-black border-2 p-2'}
                   placeholder={'프로젝트 명을 입력해주세요'} onChange={(e) => {
              setInput(e.target.value)
            }} value={input}/>
            <IoSearchOutline className={'absolute right-3'}/>
          </div>
          <IoReload className={'right-[-5%]'} onClick={onReset}/>
        </div>
      </div>
      
      {/*컨텐츠*/}
      <div className={'flex gap-10 flex-wrap justify-center'}>
        {pagedData.map(project => {
          return <Card size={"small"} key={project.idx}>
            <div className={'flex flex-col text-left'} onClick={() => handleSelectProject(project)}>
              <div className={'w-full'}>
                <img src={project.imgUrl} alt={project.title} className={'rounded w-full h-[250px] object-cover'}/>
              </div>
              <div className={'card-tag flex gap-1 p-4 text-center'}>
                <p className={'bg-pink-400 w-20 rounded-2xl font-pretendard'}>
                  PROJECT
                </p>
                <p className={'bg-orange-950 text-white w-20 rounded-2xl font-pretendard'}>
                  {project.tag}
                </p>
              </div>
              <p>{project.title}</p>
              <p>{project.subTitle}</p>
            </div>
          </Card>
        })}
        {sortedData.length === 0 && <h1>{`${input} 프로젝트가 없습니다.`}</h1>}
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectProject}/>
      </div>
      
      {/*페이지네이션*/}
      <div className={'p-10'}>
        {/*페이지네이션 {currentPage + 1} / {maxPage}*/}
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