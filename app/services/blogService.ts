import { GET_BLOG, GET_BLOGS } from "../graphql/blog/queries";
import { IBlog } from "../types/blog";

const getBlogs = async (): Promise<IBlog[] | null> => {
  const response = (await GET_BLOGS.$send()) as { blogs: IBlog[] | null };
  return response?.blogs ?? null;
};

const getBlog = async (slug: string): Promise<IBlog | null> => {
  const response = (await GET_BLOG.$send({ slug })) as {
    blog: IBlog | null;
  };
  return response?.blog ?? null;
};

export { getBlogs, getBlog };
