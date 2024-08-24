export type TWorksData = {
  id: string;
  title: string;
  workItems: TWorkItems[];
  buttonText: string;
};

export type TWorkItems = {
  [x: string]: string | undefined;
  id: string;
  company: string;
  subtitle: string;
  date: string;
  role: string;
  previewImage: string;
  previewLink: string;
};
