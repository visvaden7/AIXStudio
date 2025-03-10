import {FunctionComponent, useEffect, useMemo, useReducer, useState} from "react";
import {Portfolio, Project} from "../../../@types/domain.ts";
import {useLocation} from "react-router-dom";
import {activeClass, inactiveClass, projectList} from "../../../const/const.ts";
import {pageReducer} from "../../../reducer/reducer.ts";
import {ProjectCard} from "../../Card/ProjectCard.tsx";
import {ProjectModal} from "../../Modal/ProjectModal.tsx";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

interface Props {
  cardList: Project[] | Portfolio[];
  itemsPerPage: number;
  label: string;
}

export const DashBord:FunctionComponent<Props> = ({cardList, itemsPerPage = 16, label}) => {
  const location = useLocation();
  const project = location.state?.project;
  const [data] = useState<Project[]>(projectList)
  const [maxPage] = useState(0)
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const visiblePageCount = 5;
  
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
  
  const sortedData = useMemo(() => {
    let filtered = [...data]
    // step 1 : sort by latest
    filtered = filtered.sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime())
    console.log(cardList, label)
    // step 2: sort by input
    // if (input.length > 0) return filtered.filter(data => data.titleKo.includes(input) || data.titleEn.includes(input))
    return filtered;
  }, [cardList, data, label])
  
  // pageNation
  // const maxPage = useMemo(() => {
  //   return Math.max(1, Math.ceil(sortedData.length / itemsPerPage))
  // }, [sortedData, itemsPerPage])
  
  const visiblePages = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    const start = Math.max(0, currentPage - half);
    const end = Math.min(maxPage, start + visiblePageCount);
    
    if(end <= start){
      return [0]
    }
    return [...Array(end - start).keys()].map(i => i + start)
  }, [currentPage, visiblePageCount, maxPage]);
  
  const pagedData = useMemo(() => {
    const startIndex = itemsPerPage * currentPage
    const endIndex = startIndex + itemsPerPage
    return sortedData.slice(startIndex, endIndex);
    // return sortedData
  }, [currentPage, itemsPerPage, sortedData])
  
  useEffect(() => {
    if (project) {
      setIsModalOpen(true)
      setSelectProject(project)
    }
  }, [location, project])
  
  //TODO: fetch api
  
  // useEffect(() => {
  //   if(currentPage < maxPage) {
  //     getProjectList('', currentPage + 1).then(project => {
  //       if (project) {
  //         setMaxPage(Math.ceil(project.totalCount / itemsPerPage))
  //         setData(project.formatedData)
  //       }
  //     })
  //   }
  // }, [currentPage, itemsPerPage, maxPage]);
  
  
  
  useEffect(() => {
    dispatch({type: 'GOTOPAGE', page: 0, maxPage: maxPage})
  }, [maxPage])
  
  useEffect(() => {
    if (currentPage >= maxPage) dispatch({type: 'GOTOPAGE', page: maxPage - 1, maxPage})
  }, [maxPage, currentPage])
  
  const handleSelectProject = (project: Project) => {
    setSelectProject(project)
    setIsModalOpen(true)
  }
  return (
    <div>
      {/*컨텐츠*/}
      <div className={'project flex gap-10 flex-wrap justify-start sm:justify-between items-start'}>
        {pagedData.map((project, idx) => {
          return <ProjectCard key={`project-${idx}`}
                              project={project} onClick={() => handleSelectProject(project)}/>
        })}
        {/*{sortedData.length === 0 && <h1>{`검색한 ${input} 프로젝트가 없습니다.`}</h1>}*/}
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectProject}/>
      </div>
      {/*페이지네이션*/}
      <div className={'p-10'}>
        {/*페이지네이션 {currentPage + 1} / {maxPage}*/}
        <div className={'flex gap-3 justify-center items-center'}>
          <FiChevronLeft onClick={() => dispatch({type: 'PREVPAGE', maxPage})}/>
          {visiblePages.map(page => {
            return (
              <div key={page} onClick={() => dispatch({type: 'GOTOPAGE', page: page, maxPage})}
                   className={`cursor-pointer transition duration-100 ease-in-out transform ${currentPage === page ? activeClass : inactiveClass}`}>
                {page + 1}
              </div>
            )
          })}
          <FiChevronRight onClick={() => dispatch({type: 'NEXTPAGE', maxPage})}/>
        </div>
      </div>
    </div>
  )
}