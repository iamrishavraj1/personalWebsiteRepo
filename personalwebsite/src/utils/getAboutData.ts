import generateUUID from "./helper/generateUUID";
import { TAboutData } from "@/types/aboutData";

export const getAboutData = (): TAboutData => {
  const data = {
    id: generateUUID(),
    title: `I’m Rishav Raj.`,
    subtitle: `
        Crafting innovative software engineering solutions with a commitment to 
        seamless integration and scalability,
        I bring ideas to life from concept to completion,
        ensuring each detail is meticulously executed for a 
        refined and impactful digital experience.
      `,
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
