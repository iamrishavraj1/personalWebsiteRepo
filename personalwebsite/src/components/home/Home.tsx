"use client";
import React, { useState } from "react";
import styles from "./Home.module.css";
import SplashScreen from "@/components/shared/splashScreen/SplashScreen";
import Header from "../header/Header";
import About from "../about/About";
import Works from "../works/Works";

const Home: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashAnimationEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <div className={styles.homeWrapper}>
      <Header />
      <About />
      <Works />
      {/* {isSplashVisible ? (
        <SplashScreen onAnimationEnd={handleSplashAnimationEnd} />
      ) : (
        <>
          <Header />
          <About />
          <Works />
        </>
      )} */}
    </div>
  );
};

export default Home;
