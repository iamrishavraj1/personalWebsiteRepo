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
      url: "/assets/images/header/rishavrajCircle.png",
      altTag: "navabar logo",
      width: 100,
      height: 100,
    },
    navbarItems: [
      createNavbarItem("About", "/about"),
      createNavbarItem("Works", "/works"),
      createNavbarItem("Articles", "/articles"),
      createNavbarItem("Contact", "/contact"),
    ],
  };
  return data;
};
