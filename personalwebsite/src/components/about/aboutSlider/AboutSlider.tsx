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
        {/* <div className={styles.closeButton} onClick={onClose}>
          Close
        </div>
        <h2>About Me</h2>
        <p>
          I bring 2 years of experience as a Software Developer Engineer,
          specializing in frontend development with Next.js, React, and
          JavaScript. I have a strong focus on delivering elegant and scalable
          solutions, ensuring seamless integration with backend systems. My
          expertise extends to microservices architecture using AWS services and
          backend development with Node.js, GraphQL, and SQL. At Virohan Pvt.
          Ltd., I played a key role in developing wo applications and serverless
          APIs,
        </p>
        <div className={styles.about}>
          
       </div> */}
      </div>
    </div>,
    document.body
  );
};

export default AboutSlider;
