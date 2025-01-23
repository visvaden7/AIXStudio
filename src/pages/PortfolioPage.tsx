import {FunctionComponent, useEffect, useMemo, useReducer, useState} from "react";
import {pageReducer} from "../reducer/reducer.ts";
import {Options, Portfolio} from "../@types/domain.ts";
import {activeClass, filterBtnLabelForPortfolio, inactiveClass, portfolioList} from "../const/const.ts";
import {IoChevronDown, IoReload, IoSearchOutline} from "react-icons/io5";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {PortfolioCard} from "../components/Card/PortfolioCard.tsx";

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
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  
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
      filtered = [...filtered].sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime());
    } else if (sortedOrder === 'popular') {
      filtered = [...filtered].sort((a, b) => b.heartRate - a.heartRate);
    }
    
    // Step 3: Search by input
    if (input.length > 0) {
      filtered = filtered.filter((item) => item.title.includes(input));
    }
    
    return filtered
  }, [data, filterLabel, sortedOrder, input]);
  
  const pagedData = useMemo(() => {
    const startIndex = itemsPerPage * currentPage
    const endIndex = startIndex + itemsPerPage
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
  
  useEffect(() => {
    dispatch({type: 'GOTOPAGE', page: 0, maxPage: maxPage})
  }, [input, maxPage])
  
  useEffect(() => {
    if (currentPage >= maxPage) dispatch({type: 'GOTOPAGE', page: maxPage - 1, maxPage})
  }, [maxPage, currentPage])
  
  const handleFiltering = (idx: number, label: string) => {
    setCurrentIdx(idx)
    setFilterLabel(label)
  }
  
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }
  
  const handleOutsideClick = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".dropdown-container")) {
      setIsDropDownOpen(false)
    }
  };
  
  const onReset = () => {
    setInput('')
  }
  
  useEffect(() => {
    // 외부 클릭 이벤트 추가
    document.addEventListener("click", handleOutsideClick);
    return () => {
      // 외부 클릭 이벤트 제거
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  
  
  return (
    <div className={'w-full font-nanumSquareRound'}>
      <div className={'flex md:flex-row flex-col text-left justify-between mt-[60px] mb-[80px]'}>
        <div className={'flex flex-col'}>
          <p className={'text-[64px] font-extrabold'}>Portfolio</p>
          <p className={'text-[16px]'}>다른 친구들이 완성한 프로젝트의 결과물을 확인할 수 있어요.</p>
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
        <div className={'relative dropdown-container'}>
          <div className={' flex-1 w-[100px]'}>
            <div className={'flex justify-center items-center'} onClick={toggleDropDown}>
              <p>{sortedOrder === 'latest' ? '최신순' : '인기순'}</p>
              <IoChevronDown/>
            </div>
            {isDropDownOpen &&
                <div
                    className={'absolute w-full -bottom-[110px] right-0 flex-col justify-start rounded-xl shadow-lg overflow-hidden z-10'}>
                  {options.map(option => {
                    return (
                      <div
                        className={` py-3 transition duration-300 ease-in-out ${sortedOrder === option.value ? 'bg-[#FFF5D9]' : 'bg-white'}`}
                        onClick={() => setSortedOrder(option.value)}>
                        {option.label}
                      </div>
                    )
                  })}
                </div>}
          </div>
        </div>
      </div>
      {/*컨텐츠*/}
      <div className={'flex w-full justify-center'}>
        <div className={'portfolio flex flex-wrap gap-5 justify-start sm:justify-between items-start'}>
          {pagedData.map((portfolio,idx) => {
            return (
              <PortfolioCard key={idx} portfolio={portfolio}/>
            )
          })}
        </div>
        {pagedData.length === 0 && <h1>{`${input} 프로젝트가 없습니다.`}</h1>}
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