import React from "react";
import styles from "./Works.module.css";
import { getWorksData } from "@/utils/getWorksData";

const Works = () => {
  const { id, title, workItems, buttonText } = getWorksData();
  console.log("testing...");

  return (
    <div key={id} className={styles.worksWrapper} id={"works"}>
      <h1>{title}</h1>
      <hr />
      <div className={styles.worksList}>
        {workItems.map((item) => (
          <div key={item.id} className={styles.workItem}>
            <div className={styles.workDetails}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
              <div className={styles.meta}>
                <span>Role: {item.role}</span>
                <span>Date: {item.date}</span>
              </div>
              <a
                href={item.previewLink}
                target="_blank"
                rel="noopener noreferrer">
                {buttonText}
              </a>
            </div>
            <div className={styles.workImage}>
              <img src={item.previewImage} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
