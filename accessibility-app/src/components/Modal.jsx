import { useRef, useEffect } from "react";

function Modal({isOpen, onClose, title, children}) {
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement;
            setTimeout(() => {
                modalRef.current?.focus();
            }, 50)

            const handleDown = (e) => {
                if (e.key === 'Escape') onClose();
            }
            window.addEventListener('keydown', handleDown);
            return () => window.removeEventListener('keydown', handleDown);
        } else {
            previousFocusRef.current?.focus();
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
        <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white rounded-lg p-6 max-w-lg w-full focus:outline-none shadow-xl border border-gray-300"
        >
            <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                {title}
            </h2>
            <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-1 font-bold text-gray-700 hover:text-black focus-visible:outline focus-visible:outline-blue-700"
            >
                ✕
            </button>
            </div>
            <div>{children}</div>
        </div>
    </div>
    );
}

export default Modal;