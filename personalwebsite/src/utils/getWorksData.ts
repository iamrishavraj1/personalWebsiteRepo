import generateUUID from "./helper/generateUUID";
import { TWorksData } from "@/types/worksData";

export const getWorksData = (): TWorksData => {
  const data = {
    id: generateUUID(),
    title: "Projects I've Personally Developed",
    workItems: [
      {
        id: generateUUID(),
        title: "GitHub Portfolio Finder",
        subtitle: "A web app to search for and explore GitHub user profiles",
        date: "15 Aug 2023",
        role: "Developer",
        previewImage: "/assets/images/works/GITHUB_banner.png",
        previewLink: "https://github-portfolio-app.netlify.app",
      },
      {
        id: generateUUID(),
        title: "Rapid Markdown Editor",
        subtitle: "An intuitive markdown editor with PDF export capabilities",
        date: "10 July 2022",
        role: "Developer",
        previewImage: "/assets/images/works/MARKDOWN_banner.png",
        previewLink: "https://rapid-markdown-editor.netlify.app",
      },
      {
        id: generateUUID(),
        title: "TSF Bank Website",
        subtitle:
          "A banking website developed during an internship at The Spark Foundation",
        date: "01 April 2021",
        role: "Developer",
        projectType: "Internship Project",
        previewImage: "/assets/images/works/TSF_banner.png",
        previewLink: "https://github.com/iamrishavraj1/TSF",
      },
      {
        id: generateUUID(),
        title: "NTPL Business Website",
        subtitle: "Second Runner-up in a website design competition by NTPL",
        date: "12 May 2021",
        role: "Developer",
        projectType: "Competition Entry",
        previewImage: "/assets/images/works/NTPL_banner.png",
        previewLink: "https://github.com/iamrishavraj1/b2b",
      },
      {
        id: generateUUID(),
        title: "Rasayanatva Official Website",
        subtitle:
          "Official website for the Chemical Society of Hansraj College",
        date: "28 Aug 2021",
        role: "Developer",
        previewImage: "/assets/images/works/RASAYANATVA_banner.png",
        previewLink: "https://github.com/iamrishavraj1/Rasayanatva-project",
      },
      {
        id: generateUUID(),
        title: "Passion & Freedom Foundation Website",
        subtitle: "Community website for a non-profit organization",
        date: "31 Oct 2021",
        role: "Developer",
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
