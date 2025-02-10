import {FunctionComponent, useEffect, useMemo, useReducer} from "react";
import {pageReducer} from "../../reducer/reducer.ts";
import {isValidText} from "../../utils/typeGuard.ts";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {ValidCard} from "./ValidCard.tsx";
import {ValidText} from "../../@types/domain.ts";

interface Props {
  cardList: ValidText[];
  itemsPerPage: number;
  label: string;
  onClick?: (idx: number) => void;
}

export const ValidCardCarousel: FunctionComponent<Props> = ({cardList, label, itemsPerPage, onClick}) => {
  const [currentPage, dispatch] = useReducer(pageReducer, 0)
  const visiblePageCount = 3;
  const arrowStyle = 'absolute top-1/4 rounded-full p-4 transition duration-100 ease-in-out transform'
  const sortedData = useMemo(() => {
    return cardList;
  }, [cardList])
  
  const maxPage = useMemo(() => {
    return Math.max(1, Math.ceil(sortedData.length / itemsPerPage))
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
    console.log(currentPage, maxPage)
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
  
  return (
    <div className={'w-full p-10 font-nanumSquareRound'}>
      <div className={'text-left mb-10 flex justify-between'}>
        <p className={'text-[28px] font-extrabold leading-10 -tracking-[0.5px]'}>{label}</p>
      </div>
      {/*컨텐츠*/}
      <div className={'project'}>
        <div className={'relative flex gap-5 flex-wrap justify-start sm:justify-between items-start'}>
          {pagedData.map(validText => {
            console.log(validText)
            if (isValidText(validText)) {
              return <ValidCard key={validText.id} validText={validText} isValid={false} onClick={() => onClick?.(validText.id)}/>
            }
          })}
          {/*추후 모달 설정시 할 자리*/}
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
      </div>
    </div>
  )
}