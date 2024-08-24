import generateUUID from "./helper/generateUUID";
import { TWorksData } from "@/types/worksData";

export const getWorksData = (): TWorksData => {
  const data = {
    id: generateUUID(),
    title: "Where I've Worked",
    workItems: [
      {
        id: generateUUID(),
        company: "Virohan Pvt. Ltd.",
        subtitle: "The official website",
        date: "Feb 2023 - Present",
        role: "Software Developer Engineer (SDE-1)",
        previewImage: "/assets/images/works/VIROHAN_banner.png",
        previewLink: "https://www.virohan.com",
      },
      {
        id: generateUUID(),
        company: "Personal Project",
        subtitle: "A web app to search for and explore GitHub user profiles",
        date: "15 Aug 2023",
        role: "Web Developer",
        previewImage: "/assets/images/works/GITHUB_banner.png",
        previewLink: "https://github-portfolio-app.netlify.app",
      },
      {
        id: generateUUID(),
        company: "Personal Project",
        subtitle: "An intuitive markdown editor with PDF export capabilities",
        date: "10 July 2022",
        role: "Web Developer",
        previewImage: "/assets/images/works/MARKDOWN_banner.png",
        previewLink: "https://rapid-markdown-editor.netlify.app",
      },
      {
        id: generateUUID(),
        company: "The Spark Foundation",
        subtitle: "A banking website developed during an internship",
        date: "01 April 2021",
        role: "Web Developer Intern",
        previewImage: "/assets/images/works/TSF_banner.png",
        previewLink: "https://github.com/iamrishavraj1/TSF",
      },
      {
        id: generateUUID(),
        company: "Website Design Competition",
        subtitle: "Second Runner-up",
        date: "12 May 2021",
        role: "Web Developer",
        previewImage: "/assets/images/works/NTPL_banner.png",
        previewLink: "https://github.com/iamrishavraj1/b2b",
      },
      {
        id: generateUUID(),
        company: "Hansraj College - Unviersity of Delhi",
        subtitle: "The official website",
        date: "28 Aug 2021",
        role: "Web Developer - Freelance",
        previewImage: "/assets/images/works/RASAYANATVA_banner.png",
        previewLink: "https://github.com/iamrishavraj1/Rasayanatva-project",
      },
      {
        id: generateUUID(),
        company: "Passion & Freedom Foundation",
        subtitle: "Community website for a non-profit organization",
        date: "31 Oct 2021",
        role: "Web Developer Intern",
        previewImage: "/assets/images/works/PFF_banner.png",
        previewLink: "https://github.com/iamrishavraj1/PFF-project",
      },
    ],
    buttonText: "View Project",
  };
  data.workItems.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return data;
};
