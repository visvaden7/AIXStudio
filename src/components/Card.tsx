import {FunctionComponent, ReactNode} from "react";

interface Props {
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode;
  className?: string;
}

export const Card: FunctionComponent<Props> = ({size = 'medium', children, className}) => {
  const sizeClasses: Record<'small' | 'medium' | 'large', string> = {
    small: 'w-[30%] max-w-[30%]',
    medium: 'w-[45%] max-w-[50%]',
    large: 'w-full max-w-[100%]',
  };
  return (
    <div className={`bg-white shadow-md rounded-lg border border-gray-200 ${sizeClasses[size]} ${className}`}>
      {children || <p>Default Card Content</p>}
    </div>
  )
}