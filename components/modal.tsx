import { useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";

interface ModalProps {
  image: string;
  onClose: () => void;
}

export default function Modal({ image, onClose }: ModalProps) {
  // Use effect to handle the escape key
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

  // Function to handle the background click escape
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={handleBackgroundClick}>
      <div className={styles.modalContent}>
        <Image src={image} alt="Full size" className={styles.modalImage} onClick={(e) => e.stopPropagation()} 
          height={650}
          width={650}
        />
      </div>
    </div>
  );
}
