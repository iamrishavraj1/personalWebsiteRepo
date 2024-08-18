import { TSplashScreenItems } from "@/types/splashScreenData";
import generateUUID from "./helper/generateUUID";

export const getSplashScreenData = (): TSplashScreenItems => {
  const data = {
    id: generateUUID(),
    title: `नमस्ते!`,
    subtitle: `You've Just Landed on Rishav's Portfolio.`,
    fadeOutDelay: 2500,
    removeSplashDelay: 3500,
  };
  return data;
};
