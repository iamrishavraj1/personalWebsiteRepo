export type THeaderData = {
  id: string;
  navbarLogo: TNavbarlogo;
  navbarItems: TNavbarItems[];
};

export type TNavbarlogo = {
  id: string;
  url: string;
  altTag: string;
  width: number;
  height: number;
};

export type TNavbarItems = {
  id: string;
  name: string;
  url: string;
};
