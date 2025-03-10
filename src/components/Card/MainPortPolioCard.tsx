import {FunctionComponent, ReactNode} from "react";
import {Card} from "./Card.tsx";
import {Portfolio} from "../../@types/domain.ts";
import {GoArrowUpRight} from "react-icons/go";

interface Props {
  children?: ReactNode;
  portfolio: Portfolio;
}

export const MainPortPolioCard: FunctionComponent<Props> = ({portfolio}) => {
  return (
    <Card className={'flex grow min-w-[250px] w-[424px] h-full rounded-[64px] bg-white '}>
      <div className={'relative w-full'}>
        <div className={'w-full'}>
          <img src={portfolio.imgUrl} alt={portfolio.projectTitle} className={'w-full aspect-4/3 rounded-[30px] object-cover'}/>
        </div>
        <div className={'text-left p-10'}>
          <div>
            <span
              className={`text-[16px] font-normal leading-[150%] -tracking-[0.5px] bg-[#EDEDED] text-[#111] px-2 py-1 rounded-3xl`}>
              {portfolio.projectTitle}
            </span>
            <p className={'text-[28px] font-bold leading-[150%] -tracking-[0.5px]'}>{portfolio.title}</p>
          </div>
          <div className={'flex-col py-1'}>
            <div className={'flex gap-2'}>
              <span
                className={'text-[#111] text-[16px] font-bold leading-[150%] -tracking-[0.5px]'}>{portfolio.user}</span>
              <span
                className={'text-[#999] text-[16px] font-bold leading-[150%] -tracking-[0.5px]'}>{portfolio.timeStamp}</span>
            </div>
          </div>
        </div>
        {/*카드 모양새 만들기*/}
        <div>
          <div className={'absolute bottom-[18%] right-0 w-[25%] aspect-square bg-[#E9F6FF]'}>
            <div className={'absolute top-0 left-0 w-full aspect-square rounded-br-[40px] bg-white'}/>
          </div>
          <div className={'absolute bottom-0 right-0 w-[25%] aspect-square rounded-tl-[40px] bg-[#E9F6FF]'}/>
          <div className={'absolute bottom-0 right-[25%] w-[25%] aspect-square bg-[#E9F6FF]'}>
            <div className={'absolute top-0 left-0 w-full aspect-square rounded-br-[40px] bg-white'}/>
          </div>
          <div className={'flex absolute bottom-[0%] right-[0%] w-[20%] aspect-square rounded-full bg-[#EF4A60] justify-center items-center text-[200%] text-extrabold text-white hover:scale-110 transition'} onClick={() => alert('개발 중입니다.')}>
            <GoArrowUpRight/>
          </div>
        </div>
      </div>
    </Card>
  )
}