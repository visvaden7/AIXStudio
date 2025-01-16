import {FunctionComponent, ReactNode} from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Card: FunctionComponent<Props> = ({children, className}) => {
  return (
    <div className={`bg-transparent rounded-lg ${className}`}>
      {children || <p>Default Card Content</p>}
    </div>
  )
}