export interface IBlog {
  title: string;
  slug: string;
  summary: string;
  thumbnail?: {
    url: string;
  } | null;
}
