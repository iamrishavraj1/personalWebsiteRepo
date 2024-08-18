"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { THeaderData, TNavbarItems } from "@/types/headerData";
import { getHeaderdata } from "@/utils/getHeaderData";

const Header = () => {
  const { id, navbarLogo, navbarItems }: THeaderData = getHeaderdata();

  const handleScroll = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

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
          {navbarItems.map((navbarItem: TNavbarItems) => (
            <div
              key={navbarItem.id}
              className={styles.navbarItem}
              onClick={(event) =>
                handleScroll(event, navbarItem.url.replace("/", ""))
              }>
              {navbarItem.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
