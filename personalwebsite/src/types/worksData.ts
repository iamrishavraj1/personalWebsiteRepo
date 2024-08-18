export type TWorksData = {
  id: string;
  title: string;
  workItems: TWorkItems[];
  buttonText: string;
};

export type TWorkItems = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  role: string;
  previewImage: string;
  previewLink: string;
};
