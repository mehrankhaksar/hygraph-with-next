export interface IBlog {
  title: string;
  slug: string;
  summary: string;
  thumbnail?: {
    url: string;
  } | null;
  content: {
    raw: any;
  } | null;
  createdBy: {
    name: string;
  };
}
