import { PaginatedAPIResponseType } from "./general";

export interface IBlog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  thumbnail: {
    url: string;
    fileName: string;
  };
}

export type BlogAPIResponseType = {
  blog: IBlog | null;
};
export type PaginatedBlogsAPIResponseType = {
  blogsConnection: PaginatedAPIResponseType<IBlog>;
};
