import { ReactNode } from "react";

export const Modal = ({
                        children,
                        isOpen,
                        onClose,
                      }: {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
