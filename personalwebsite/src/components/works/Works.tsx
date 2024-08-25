// // import React from "react";
// // import styles from "./Works.module.css";
// // import { getWorksData } from "@/utils/getWorksData";

// // const Works = () => {
// //   const { id, title, workItems, buttonText } = getWorksData();
// //   return (
// //     <div key={id} className={styles.worksWrapper} id={"works"}>
// //       <h1>{title}</h1>
// //       <div className={styles.worksList}>
// //         {workItems.map((item) => (
// //           <div key={item.id} className={styles.workItem}>
// //             <div className={styles.workDetails}>
// //               <h2>{item.title}</h2>
// //               <p>{item.subtitle}</p>
// //               <div className={styles.meta}>
// //                 <span>Role: {item.role}</span>
// //                 <span>Date: {item.date}</span>
// //               </div>
// //               <a
// //                 href={item.previewLink}
// //                 target="_blank"
// //                 rel="noopener noreferrer">
// //                 {buttonText}
// //               </a>
// //             </div>
// //             <div className={styles.workImage}>
// //               <img src={item.previewImage} alt={item.title} />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Works;

// import React from "react";
// import styles from "./Works.module.css";
// import { getWorksData } from "@/utils/getWorksData";

// const Works = () => {
//   const { id, title, workItems, buttonText } = getWorksData();

//   return (
//     <div key={id} className={styles.worksWrapper} id="works">
//       <h1>{title}</h1>
//       <div className={styles.worksList}>
//         {workItems.map((item) => (
//           <div key={item.id} className={styles.workItem}>
//             <div className={styles.workDetails}>
//               <h2>{item.title}</h2>
//               <p>{item.subtitle}</p>
//               <div className={styles.meta}>
//                 <span>Company: {item.company}</span>
//                 <span>Role: {item.role}</span>
//                 <span>Date: {item.date}</span>
//               </div>
//               <a
//                 href={item.previewLink}
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 {buttonText}
//               </a>
//             </div>
//             <div className={styles.workImage}>
//               <img src={item.previewImage} alt={item.title} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Works;
import React from "react";
import styles from "./Works.module.css";
import { getWorksData } from "@/utils/getWorksData";
import Image from "next/image";

const Works = () => {
  const { id, title, workItems, buttonText } = getWorksData();

  return (
    <div key={id} className={styles.worksWrapper} id="works">
      <h1>{title}</h1>
      <div className={styles.worksList}>
        {workItems.map((item) => (
          <div key={item.id} className={styles.workItem}>
            <div className={styles.workDetails}>
              <h2 className={styles.companyName}>{item.company}</h2>
              <h3>{item.title}</h3>
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
            <div className={styles.workImageCon}>
              <Image
                className={styles.workImage}
                src={item.previewImage}
                height={300}
                width={300}
                priority
                quality={100}
                alt={item.company}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
