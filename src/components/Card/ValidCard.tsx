import {Card} from "./Card.tsx";
import {FunctionComponent} from "react";
import {ValidText} from "../../@types/domain.ts";

interface Props {
  validText: ValidText;
  className?: string;
  isValid: boolean;
  onClick: (idx:number) => void;
  
}

export const ValidCard: FunctionComponent<Props> = ({validText, onClick, className, isValid = false}) => {
  return (
    <Card className={`flexible-card ${className}`}>
      <div className={`relative ${isValid ? 'border-4 border-[#FFE552] rounded-b-2xl rounded-tr-2xl' : ''}`}>
        {isValid && <div className={`absolute -top-[35px] -left-1 bg-[#FFE552] rounded-t-2xl py-1 px-2 w-[30%] font-bold`}>검증완료</div>}
        <div
          className={`flex flex-col w-full h-[250px] ${isValid ? '': 'border'} border-black rounded-2xl overflow-hidden p-4`}
          onClick={() => onClick(validText.id)}>
          <p className={'text-[24px] leading-[36px] -tracking-[0.5px] font-normal line-clamp-6'}>
            {validText.content}
          </p>
        </div>
      </div>
    </Card>
    
  
  )
}