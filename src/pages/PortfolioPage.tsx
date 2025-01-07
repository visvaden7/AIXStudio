import {FunctionComponent, useMemo, useReducer, useState} from "react";
import {pageReducer} from "../const/reducer.ts";
import {Options, Portfolio} from "../@types/domain.ts";
import {filterBtnLabelForPortfolio, portfolioList} from "../const/const.ts";
import {IoArrowBack, IoArrowForward, IoHeartOutline, IoReload, IoSearchOutline} from "react-icons/io5";
import {Card} from "../components/Card.tsx";

export const PortfolioPage: FunctionComponent = () => {
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [sortedOrder, setSortedOrder] = useState<'latest' | 'popular'>('latest')
  const itemsPerPage = 12;
  const visiblePageCount = 5;
  
  const options:Options[] = [
    {id: 0, value: 'latest', label:'최신순'},
    {id: 1, value: 'popular', label: '인기도'}
  ]
  
  const [data] = useState<Portfolio[]>(portfolioList) //TODO: 추후 API 로 데이터 연결예정 / 현재 더미데이터
  const [input, setInput] = useState('')
  const [filterLabel, setFilterLabel] = useState('전체')
  
  const sortedData = useMemo(() => {
    let filtered = data;
    
    // Step 1: Filter by label
    if (filterLabel !== '전체') {
      filtered = filtered.filter((item) => item.title.includes(filterLabel));
    }
    
    // Step 2: Sort by order (latest or popular)
    if (sortedOrder === 'latest') {
      filtered = [...filtered].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    } else if (sortedOrder === 'popular') {
      filtered = [...filtered].sort((a, b) => b.heartRate - a.heartRate);
    }
    
    // Step 3: Search by input
    if (input.length > 0) {
      filtered = filtered.filter((item) => item.title.includes(input));
    }
    
    console.log('test', filtered)
    return filtered
  }, [data, filterLabel, sortedOrder, input]);
  
  const pagedData = useMemo(() => {
    const startIndex = itemsPerPage * currentPage
    const endIndex = startIndex + itemsPerPage
    console.log(sortedData.slice(startIndex, endIndex))
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage])
  
  // pageNation
  const maxPage = useMemo(() => {
    return Math.max(1,Math.ceil(sortedData.length / itemsPerPage))
  }, [sortedData, itemsPerPage])
  
  const visiblePages = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    const start = Math.max(0, currentPage - half);
    const end = Math.min(maxPage, start + visiblePageCount);
    return [...Array(end - start).keys()].map(i => i + start)
  }, [currentPage, visiblePageCount, maxPage]);
  
  const handleFiltering = (idx: number, label: string) => {
    setCurrentIdx(idx)
    setFilterLabel(label)
  }
  
  const onReset = () => {
    setInput('')
  }
  
  const activeClass = "font-bold text-red-400";
  const inactiveClass = "text-gray-600";
  
  return (
    <div className={'w-full font-pretendard'}>
      <div className={'flex text-left justify-between m-10'}>
        <div className={'flex flex-col'}>
          <p className={'text-[50px]'}>Portfolio</p>
          <p className={'pretendard-extraBold text-[16px]'}>다른 친구들이 완성한 프로젝트의 결과물을 확인할 수 있어요.</p>
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
      <div className={'flex justify-between items-center'}>
        <div className={'flex w-full gap-5 justify-start m-10'}>
          {filterBtnLabelForPortfolio.map((label, idx) => {
            return (
              <button
                className={`w-[10%] h-[40px] ${currentIdx === idx ? 'bg-purple-600' : 'bg-gray-400'} text-white rounded-2xl`}
                onClick={() => handleFiltering(idx, label)}
                key={idx}
              >{label}</button>
            )
          })}
        </div>
        <div>
          <select name={'sort'} onChange={e => setSortedOrder(e.target.value as 'latest' | 'popular')}>
            {options.map((option, idx) =>{
              return <option value={option.value} key={idx}>{option.label}</option>
            })}
          </select>
        </div>
      </div>
      {/*컨텐츠*/}
      <div className={'flex gap-10 flex-wrap justify-center'}>
        {pagedData.map(project => {
          return <Card size={"small"} key={project.idx}>
            <div className={'flex flex-col text-left'}>
              <div className={'w-full'}>
                <img src={project.imgUrl} alt={project.title} className={'rounded w-full h-[250px] object-cover'}/>
              </div>
              <div className={'card-tag flex gap-1 p-4 text-center'}>
                <p className={'bg-pink-400 w-20 rounded-2xl font-pretendard'}>
                  PROJECT
                </p>
                <p className={'bg-orange-950 text-white w-20 rounded-2xl font-pretendard'}>
                  {/*{project.tag}*/}
                </p>
              </div>
              <p>{project.title}</p>
              <p>{project.subtitle}</p>
              <div>
                <p>{`${project.user} - ${project.timestamp}`}</p>
                <div className={'flex'}>
                  <IoHeartOutline/>
                  {project.heartRate}
                </div>
              </div>
            </div>
          </Card>
        })}
        {pagedData.length === 0 && <h1>{`${input} 프로젝트가 없습니다.`}</h1>}
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