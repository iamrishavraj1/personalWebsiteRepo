export type TSplashScreenData = {
  onAnimationEnd: () => void;
};

export type TSplashScreenItems = {
  id: string;
  title: string;
  subtitle: string;
  fadeOutDelay: number;
  removeSplashDelay: number;
};
