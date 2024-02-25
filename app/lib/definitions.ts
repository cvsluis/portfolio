export type Project = {
  id: number;
  name: string;
  cover: string;
  images: Images;
  stack: string;
  description: string;
  features: string | "";
  github: string;
};

export type Images = {
  type: string;
  url: string;
}[];