import { THeaderData, TNavbarItems } from "@/types/headerData";
import generateUUID from "./helper/generateUUID";

export const getHeaderdata = (): THeaderData => {
  const createNavbarItem = (name: string, url: string): TNavbarItems => ({
    id: generateUUID(),
    name,
    url,
  });
  const data = {
    id: generateUUID(),
    navbarLogo: {
      id: generateUUID(),
      url: "/assets/images/header/navbarLogo.png",
      altTag: "navabar logo",
      width: 100,
      height: 100,
    },
    navbarItems: [
      createNavbarItem("Home", "/"),
      createNavbarItem("More about me", "/more-about-me"),
      createNavbarItem("Work demo", "/work-demo"),
      createNavbarItem("Tech articles", "/tech-articles"),
    ],
  };
  return data;
};
