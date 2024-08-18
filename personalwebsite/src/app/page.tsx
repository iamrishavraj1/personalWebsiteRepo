import React from "react";
import styles from "./page.module.css";
import Home from "@/components/home/Home";

const Page = async () => {
  return (
    <div className={styles.pageWrapper}>
      <Home />
    </div>
  );
};

export default Page;
