import React from "react";
import styles from "./InfiniteCarousel.module.css";
import generateUUID from "@/utils/helper/generateUUID";

const InfiniteCarousel: React.FC<{ carouselItems: string[] }> = ({
  carouselItems,
}) => {
  return (
    <div className={styles.infiniteCarouselWrapper}>
      <div className={styles.carousel}>
        {carouselItems.concat(carouselItems).map((item) => (
          <div key={generateUUID()} className={styles.carouselItemWrapper}>
            <span className={styles.carouselItem}>• {item}</span>
          </div>
        ))}
        {carouselItems.concat(carouselItems).map((item) => (
          <div
            key={generateUUID() + carouselItems.length}
            className={styles.carouselItemWrapper}>
            <span className={styles.carouselItem}>• {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
