import {FunctionComponent, useEffect, useMemo, useReducer, useState} from "react";
import {pageReducer} from "../reducer/reducer.ts";
import {Options, Portfolio} from "../@types/domain.ts";
import {activeClass, filterBtnLabelForPortfolio, inactiveClass, portfolioList} from "../const/const.ts";
import {IoArrowBack, IoArrowForward, IoHeartOutline, IoReload, IoSearchOutline} from "react-icons/io5";
import {Card} from "../components/Card.tsx";

export const PortfolioPage: FunctionComponent = () => {
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [sortedOrder, setSortedOrder] = useState<'latest' | 'popular'>('latest')
  const itemsPerPage = 12;
  const visiblePageCount = 5;
  
  const options: Options[] = [
    {id: 0, value: 'latest', label: '최신순'},
    {id: 1, value: 'popular', label: '인기도'}
  ]
  
  const [data] = useState<Portfolio[]>(portfolioList) //TODO: 추후 API 로 데이터 연결예정 / 현재 더미데이터
  const [input, setInput] = useState('')
  const [filterLabel, setFilterLabel] = useState('전체')
  
  const sortedData = useMemo(() => {
    let filtered = data;
    
    //TODO: 학교 기관 닉네임 검색가능 추진
    //TODO: 좋아요, 최신순, 가나다 순으로 정렬
    //TODO: 본인의 것, 그리고 로그인 안된상태에서만 좋아요 비활성화
    //TODO: 좋아요 시, 좋아요 수 바로 증가
    
    // Step 1: Filter by label
    if (filterLabel !== '전체') {
      filtered = filtered.filter((item) => item.type.includes(filterLabel));
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
    return Math.max(1, Math.ceil(sortedData.length / itemsPerPage))
  }, [sortedData, itemsPerPage])
  
  const visiblePages = useMemo(() => {
    const half = Math.floor(visiblePageCount / 2);
    const start = Math.max(0, currentPage - half);
    const end = Math.min(maxPage, start + visiblePageCount);
    return [...Array(end - start).keys()].map(i => i + start)
  }, [currentPage, visiblePageCount, maxPage]);
  
  useEffect(() =>{
    dispatch({type: 'GOTOPAGE', page:0, maxPage: maxPage})
  },[input, maxPage])
  
  useEffect(() =>{
    if(currentPage >= maxPage) dispatch({type: 'GOTOPAGE', page:maxPage-1, maxPage})
  },[maxPage, currentPage])
  
  const handleFiltering = (idx: number, label: string) => {
    setCurrentIdx(idx)
    setFilterLabel(label)
  }
  
  const onReset = () => {
    setInput('')
  }
  
  return (
    <div className={'w-full font-nanumSquareRound'}>
      <div className={'flex text-left justify-between my-10'}>
        <div className={'flex flex-col'}>
          <p className={'text-[50px]'}>Portfolio</p>
          <p className={'text-[16px]'}>다른 친구들이 완성한 프로젝트의 결과물을 확인할 수 있어요.</p>
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
        <div className={'flex w-full gap-5 justify-start my-10'}>
          {filterBtnLabelForPortfolio.map((label, idx) => {
            return (
              <button
                className={`px-6 h-[40px] ${currentIdx === idx ? 'bg-[#FFE552] shadow-lg font-extrabold text-black' : 'bg-[#EFEEF3] font-bold text-[#666]'}  leading-6 -tracking-[0.5px] rounded-2xl`}
                onClick={() => handleFiltering(idx, label)}
                key={idx}
              >{label}</button>
            )
          })}
        </div>
        <div>
          <select name={'sort'} onChange={e => setSortedOrder(e.target.value as 'latest' | 'popular')}>
            {options.map((option, idx) => {
              return <option value={option.value} key={idx}>{option.label}</option>
            })}
          </select>
        </div>
      </div>
      {/*컨텐츠*/}
      <div className={'flex w-full justify-center'}>
        <div className={'portfolio flex flex-wrap gap-10 justify-start sm:justify-between items-start'}>
          {pagedData.map(project => {
            return (
              <Card className={'flexible-card'} key={project.idx}>
                <div className={'flex flex-col w-full text-left'}>
                  <div className={'w-full overflow-hidden'}>
                    <img src={project.imgUrl} alt={project.title} className={'rounded w-full h-[250px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'}/>
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
            )
          })}
        </div>
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