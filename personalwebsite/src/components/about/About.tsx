"use client";
import React from "react";
import styles from "./About.module.css";
import { TAboutData } from "@/types/aboutData";
import { getAboutData } from "@/utils/getAboutData";
import InfiniteCarousel from "../shared/infiniteCarousel/InfiniteCarousel";

const About = () => {
  const { id, title, subtitle, carouselItems }: TAboutData = getAboutData();
  return (
    <div key={id} className={`${styles.aboutWrapper} ${styles.stickyWrapper}`}>
      <div className={styles.aboutBody}>
        <h1 className={styles.aboutTitle}>INNOVATIVE SOFTWARE ENGINEER</h1>
        <h1 className={styles.aboutTitle}>
          INDIA<span className={styles.aboutStar}>*</span>
        </h1>
      </div>

      <div className={styles.carouselWrapper}>
        <InfiniteCarousel carouselItems={carouselItems} />
      </div>
    </div>
  );
};

export default About;
