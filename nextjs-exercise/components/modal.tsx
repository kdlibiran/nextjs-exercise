import { useEffect } from "react";

interface ModalProps {
  image: string;
  onClose: () => void;
}

export default function Modal({ image, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
      <div className="relative w-2/3 mx-auto p-4">
        <img src={image} alt="Full size" className="max-w-full max-h-full mx-auto" onClick={(e) => e.stopPropagation()}/>
      </div>
    </div>
  );
}
