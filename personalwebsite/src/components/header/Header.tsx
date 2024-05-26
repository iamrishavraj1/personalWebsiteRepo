"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { THeaderData, TNavbarItems } from "@/types/headerData";
import { getHeaderdata } from "@/utils/getHeaderData";

const Header = () => {
  const { id, navbarLogo, navbarItems }: THeaderData = getHeaderdata();
  return (
    <nav key={id} className={styles.navbarWrapper}>
      <div className={styles.navbarLogoContainer}>
        <Image
          className={styles.navbarLogoImg}
          src={navbarLogo.url}
          width={navbarLogo.width}
          height={navbarLogo.height}
          alt={navbarLogo.altTag}
          quality={100}
          priority
        />
      </div>

      <div className={styles.navbarItemsWrapper}>
        <div className={styles.navbarItems}>
          {navbarItems.map((navbarItem: TNavbarItems) => {
            return <div key={navbarItem.id}>{navbarItem.name}</div>;
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
