import {FunctionComponent} from "react";

interface Props {
  currentStep: number;
  totalStep: number;
}
export const ProgressBar:FunctionComponent<Props> = ({currentStep, totalStep}) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner flex w-full h-1 mb-5">
        {Array.from({length:totalStep}).map((_, idx) => {
          return <div key={idx} className={`flex-1 h-full ${currentStep > idx ? 'bg-yellow-500': 'bg-gray-300'}`}></div>
        })}
      </div>
    </div>
  )
}