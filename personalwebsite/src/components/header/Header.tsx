// "use client";
// import { useState } from "react";
// import styles from "./Header.module.css";
// import Image from "next/image";
// import { THeaderData, TNavbarItems } from "@/types/headerData";
// import { getHeaderdata } from "@/utils/getHeaderData";
// import AboutSlider from "../about/aboutSlider/AboutSlider";

// const Header = () => {
//   const { id, navbarLogo, navbarItems }: THeaderData = getHeaderdata();
//   const [showSlider, setShowSlider] = useState(false);

//   const handleScroll = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     sectionId: string
//   ) => {
//     event.preventDefault();
//     console.log("sectionId", sectionId);

//     if (sectionId === "about") {
//       setShowSlider(true);
//     } else {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//           inline: "nearest",
//         });
//       }
//     }
//   };

//   const handleCloseSlider = () => {
//     setShowSlider(false);
//   };

//   return (
//     <>
//       <nav key={id} className={styles.navbarWrapper}>
// <div className={styles.navbarLogoContainer}>
//   <Image
//     className={styles.navbarLogoImg}
//     src={navbarLogo.url}
//     width={navbarLogo.width}
//     height={navbarLogo.height}
//     alt={navbarLogo.altTag}
//     quality={100}
//     priority
//   />
// </div>

//         <div className={styles.navbarItemsWrapper}>
//           <div className={styles.navbarItems}>
//             {navbarItems.map((navbarItem: TNavbarItems) => (
//               <p
//                 key={navbarItem.id}
//                 className={styles.navbarItem}
//                 onClick={(event) =>
//                   handleScroll(event, navbarItem.url.replace("/", ""))
//                 }>
//                 {navbarItem.name}
//               </p>
//             ))}
//           </div>
//         </div>
//       </nav>
//       <AboutSlider isVisible={showSlider} onClose={handleCloseSlider} />
//     </>
//   );
// };

// export default Header;

"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { THeaderData, TNavbarItems } from "@/types/headerData";
import { getHeaderdata } from "@/utils/getHeaderData";
import AboutSlider from "../about/aboutSlider/AboutSlider";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

const Header = () => {
  const { id, navbarLogo, navbarItems }: THeaderData = getHeaderdata();
  const [showSlider, setShowSlider] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    console.log("sectionId", sectionId);

    if (sectionId === "about") {
      setShowSlider(true);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
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
              <p
                key={navbarItem.id}
                className={styles.navbarItem}
                onClick={(event) =>
                  handleScroll(event, navbarItem.url.replace("/", ""))
                }>
                {navbarItem.name}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.navbarSocialMediaIcons}>
          <FaLinkedin size={30} />
          <FaGithub size={30} />
        </div>
      </div>
      <AboutSlider isVisible={showSlider} onClose={handleCloseSlider} />
    </nav>
  );
};

export default Header;
