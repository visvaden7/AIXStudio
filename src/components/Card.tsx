import {FunctionComponent, ReactNode} from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Card: FunctionComponent<Props> = ({children, className}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`}>
      {children || <p>Default Card Content</p>}
    </div>
  )
}