export default function Modal({ isOpen, onClose, children }) {
  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 pt-10 flex h-full w-full items-center justify-center bg-black/75"
        onClick={onClose}
      >
        <div
          className="w-full rounded-lg bg-black px-8 py-10 md:w-[400px] md:h-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  );
}
