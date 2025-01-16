import {FunctionComponent, useEffect, useMemo, useReducer, useState} from "react";
import {Card} from "../components/Card/Card.tsx";
import {IoReload, IoSearchOutline} from "react-icons/io5";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {activeClass, inactiveClass, projectList} from "../const/const.ts";
import {Project} from "../@types/domain.ts";
import {pageReducer} from "../reducer/reducer.ts";
import {ProjectModal} from "../components/Modal/ProjectModal.tsx";

export const ProjectPage: FunctionComponent = () => {
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const itemsPerPage = 9;
  const visiblePageCount = 5;
  
  const [data] = useState<Project[]>(projectList) //TODO: 추후 API 로 데이터 연결예정 / 현재 더미데이터
  
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectProject, setSelectProject] = useState<Project>({
    idx: 0,
    titleKo: '',
    titleEn: '',
    subTitle:'',
    imgUrl: '',
    hash:[],
    type: '',
    story:'',
    timeStamp: ''
  });
  
  const sortedData = useMemo(() => {
    let filtered = data
    
    // step 1 : sort by latest
    filtered = filtered.sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime())
    
    // step 2: sort by input
    if (input.length > 0) return filtered.filter(data => data.titleKo.includes(input) || data.titleEn.includes(input))
    return filtered;
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
  
  useEffect(() =>{
    dispatch({type: 'GOTOPAGE', page:0, maxPage: maxPage})
  },[input, maxPage])
  
  useEffect(() =>{
    if(currentPage >= maxPage) dispatch({type: 'GOTOPAGE', page:maxPage-1, maxPage})
  },[maxPage, currentPage])
  
  const onReset = () => {
    setInput('')
  }
  
  const handleSelectProject = (project: Project) => {
    console.log(project)
    setSelectProject(project)
    setIsModalOpen(true)
  }
  
  return (
    <div className={'w-full font-nanumSquareRound'}>
      <div className={'flex md:flex-row flex-col text-left justify-between mt-[60px] mb-[80px]'}>
        <div className={'flex flex-col'}>
          <p className={'text-[64px] font-extrabold leading-[96px] -tracking-[0.5px]'}>Project</p>
          <p className={'text-[16px] leading-[30px] -tracking-[0.5px] font-normal'}>AiX STUDIO 에서 참여할 수 있는 다양한 프로젝트를 확인해보세요.</p>
        </div>
        <div className={'flex w-[350px] gap-2 items-center'}>
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
      <div className={'project flex gap-10 flex-wrap justify-start sm:justify-between items-start'}>
        {pagedData.map(project => {
          return <Card key={project.idx} className={'flexible-card'}>
            <div className={'flex flex-col w-full text-left'} onClick={() => handleSelectProject(project)}>
              <div className={'relative w-full rounded-[16px] overflow-hidden'}>
                <img src={project.imgUrl} alt={project.titleKo}
                     className={'w-full h-[250px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'}/>
              </div>
              <div className={'card-tag flex gap-1 py-4 justify-start text-[14px] font-bold -tracking-[0.5px]'}>
                <p
                  className={'flex bg-[#EDEDED] text-black py-1 px-2 rounded-lg justify-center items-center leading-[21px]'}>
                  PROJECT
                </p>
                <p
                  className={'flex bg-[#FFE552] text-black py-1 px-2 rounded-lg justify-center items-center leading-[21px]'}>
                  {project.type}
                </p>
              </div>
              <p className={'text-[24px] leading-[36px] -tracking-[0.5px] font-extrabold'}>{project.titleKo}</p>
              <p className={'text-[16px] leading-[24px]'}>{project.titleEn}</p>
            </div>
          </Card>
        })}
        {sortedData.length === 0 && <h1>{`검색한 ${input} 프로젝트가 없습니다.`}</h1>}
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectProject}/>
      </div>
      
      {/*페이지네이션*/}
      <div className={'p-10'}>
        {/*페이지네이션 {currentPage + 1} / {maxPage}*/}
        <div className={'flex gap-3 justify-center items-center'}>
          <FiChevronLeft onClick={() => dispatch({type: 'PREVPAGE', maxPage})}/>
          {visiblePages.map(it => {
            return (
              <div key={it} onClick={() => dispatch({type: 'GOTOPAGE', page: it, maxPage})}
                   className={`cursor-pointer transition duration-100 ease-in-out transform ${currentPage === it ? activeClass : inactiveClass}`}>
                {it + 1}
              </div>
            )
          })}
          <FiChevronRight onClick={() => dispatch({type: 'NEXTPAGE', maxPage})}/>
        </div>
      </div>
    </div>
  )
}