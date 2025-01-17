import {ReactNode} from "react";

export const Modal = ({
                        children,
                        isOpen,
                        onClose,
                        className
                      }: {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Container */}
      <div className={`relative w-full max-w-[680px] bg-white rounded-lg shadow-lg p-[40px] ${className}`}>
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
  );
};
