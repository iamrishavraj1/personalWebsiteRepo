import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./AboutSlider.module.css";

const AboutSlider = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isVisible || !mounted) return null;

  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.sliderContainer}>
        <div className={styles.closeButton} onClick={onClose}>
          &times;
        </div>
        About Content Goes Here
      </div>
    </div>,
    document.body
  );
};

export default AboutSlider;
