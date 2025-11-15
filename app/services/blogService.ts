import { GET_BLOGS } from "../graphql/blog/queries";
import { IBlog } from "../types/blog";

const getBlogs = async (): Promise<IBlog[] | null> => {
  const response = (await GET_BLOGS.$send()) as { blogs: IBlog[] | null };
  return response?.blogs ?? null;
};

export { getBlogs };
