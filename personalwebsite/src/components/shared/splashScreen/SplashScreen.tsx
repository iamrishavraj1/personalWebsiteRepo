import React, { useState, useEffect, useRef } from "react";
import styles from "./SplashScreen.module.css";
import { getSplashScreenData } from "@/utils/getSplashScreenData";
import { TSplashScreenData } from "@/types/splashScreenData";

const SplashScreen: React.FC<TSplashScreenData> = ({ onAnimationEnd }) => {
  const { id, title, subtitle, fadeOutDelay, removeSplashDelay } =
    getSplashScreenData();
  const fadeOutRef = useRef<NodeJS.Timeout | null>(null);
  const removeSplashRef = useRef<NodeJS.Timeout | null>(null);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn);

  useEffect(() => {
    fadeOutRef.current = setTimeout(() => {
      setFadeClass(styles.fadeOut);
    }, fadeOutDelay);

    removeSplashRef.current = setTimeout(() => {
      onAnimationEnd();
    }, removeSplashDelay);

    return () => {
      if (fadeOutRef.current) {
        clearTimeout(fadeOutRef.current);
      }
      if (removeSplashRef.current) {
        clearTimeout(removeSplashRef.current);
      }
    };
  }, [onAnimationEnd]);

  return (
    <div className={`${styles.splashScreenWrapper} ${fadeClass}`} key={id}>
      <div className={styles.splashText}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SplashScreen;
