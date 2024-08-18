"use client";
import styles from "./About.module.css";
import { TAboutData } from "@/types/aboutData";
import { getAboutData } from "@/utils/getAboutData";
import React from "react";
import InfiniteCarousel from "../shared/infiniteCarousel/InfiniteCarousel";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const About = () => {
  const { id, title, subtitle, carouselItems }: TAboutData = getAboutData();
  const isDesktop = useMediaQuery("min-width: 1024px");
  return (
    <div key={id} className={`${styles.aboutWrapper} ${styles.stickyWrapper}`}>
      <div className={styles.aboutBody}>
        <h1 className={styles.aboutTitle}>{title}</h1>
        <p className={styles.aboutSubtitle}>{subtitle}</p>
      </div>
      <div className={styles.carouselWrapper}>
        <InfiniteCarousel carouselItems={carouselItems} />
      </div>
    </div>
  );
};

export default About;
