import { useEffect } from "react";
import Image from "next/image";

interface ModalProps {
  image: string;
  onClose: () => void;
}

export default function Modal({ image, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
      <div className="relative w-2/3 mx-auto p-4">
        <Image src={image} alt="Full size" className="max-w-full max-h-full mx-auto" onClick={(e) => e.stopPropagation()} 
          height={650}
          width={650}
        />
      </div>
    </div>
  );
}
