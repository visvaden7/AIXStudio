import {FunctionComponent, ReactNode} from "react";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const CoverModal:FunctionComponent<Props> = ({isOpen, onClose, className, children}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/50">
      {/* Modal Container */}
      <div className={`relative max-w-[680px] bg-white rounded-3xl shadow-lg ${className} overflow-hidden`}>
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-[40px] font-extrabold"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}