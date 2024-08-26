import generateUUID from "./helper/generateUUID";
import { TAboutData } from "@/types/aboutData";

export const getAboutData = (): TAboutData => {
  const data = {
    id: generateUUID(),
    title: `INNOVATIVE SOFTWARE ENGINEER`,
    subtitle: `INDIA`,
    carouselItems: [
      "2+ years of experience",
      "Based in Gurgaon, Haryana, India",
      "Fullstack developmenet",
      "Seamless integration",
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Microservices architecture",
      "AWS",
      "Node.js",
      "GraphQL",
      "SQL",
    ],
  };
  return data;
};
