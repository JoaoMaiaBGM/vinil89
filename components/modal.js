'use client';
import { IoClose } from 'react-icons/io5';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 p-4 md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        className="relative mt-8 w-full max-w-[440px] rounded-lg bg-black md:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
          <div className="z-10 flex justify-end bg-black px-4 pb-2 pt-2 md:px-6">
            <button
              type="button"
              className="cursor-pointer text-3xl leading-none text-white"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <IoClose />
            </button>
          </div>
          <div className="px-6 pb-8 pt-2 md:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
