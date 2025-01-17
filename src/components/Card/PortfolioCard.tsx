import {Portfolio} from "../../@types/domain.ts";
import {IoHeart, IoHeartOutline} from "react-icons/io5";
import {Card} from "./Card.tsx";
import {FunctionComponent} from "react";
import {useLike} from "../../hook/useLike.tsx";

interface Props {
  portfolio: Portfolio;
  className?: string;
}

export const PortfolioCard:FunctionComponent<Props> = ({portfolio, className}) => {
  const { isLiked, toggleLike } = useLike({initialLike:false, portfolio: portfolio})
  
  const handelIsLike = () => {
    toggleLike()
    //   TODO: api code 작성 ( data => 사용자 정보, portfolio - idx)
  }
  return (
    <Card className={`portfolio-card ${className}`} key={portfolio.idx}>
      <div className={'flex flex-col gap-5 w-full text-left'}>
        <div className={'relative w-full rounded-[16px] overflow-hidden'}>
          <img src={portfolio.imgUrl} alt={portfolio.title}
               className={'w-full h-[250px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110'}/>
          {/*TODO: 좋아요 로직 정리하기*/}
          {isLiked
            ? <IoHeartOutline className={`absolute top-4 right-4 text-4xl text-white`}
                              onClick={handelIsLike}/>
            : <IoHeart className={`absolute top-4 right-4 text-4xl text-[#EF4A60]`}
                       onClick={handelIsLike}/>}
        </div>
        <div className={'flex flex-col gap-1'}>
          <p className={'text-[16px] text-black/60'}>{portfolio.title}</p>
          <p className={'text-[24px] text-black font-bold'}>{portfolio.subtitle}</p>
          <div className={'flex'}>
            <p className={'text-[#111] font-bold '}>{`${portfolio.user} - `}</p>
            <p className={'text-[16px] text-[#666]'}>{`${portfolio.timeStamp}`}</p>
          </div>
          <div className={'flex gap-1 justify-start items-center'}>
            <IoHeartOutline className={'text-[16px] text-black/30 text-bold'}/>
            <p className={'text-[14px]'}>{portfolio.heartRate}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}