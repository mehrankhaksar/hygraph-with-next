import {
  GET_BLOG,
  GET_BLOGS,
  GET_PAGINATED_BLOGS,
} from "../graphql/blog/queries";
import { IBlog } from "../types/blog";
import { PaginatedResponseType } from "../types/general";

const getBlogs = async (): Promise<IBlog[] | null> => {
  const response = (await GET_BLOGS.$send()) as { blogs: IBlog[] | null };
  return response?.blogs ?? null;
};

const getPaginatedBlogs = async (
  cursor: string | null = null
): Promise<PaginatedResponseType<IBlog> | null> => {
  const response = (await GET_PAGINATED_BLOGS.$send({ cursor })) as {
    blogsConnection: PaginatedResponseType<IBlog> | null;
  };
  return response?.blogsConnection ?? null;
};

const getBlog = async (slug: string): Promise<IBlog | null> => {
  const response = (await GET_BLOG.$send({ slug })) as {
    blog: IBlog | null;
  };
  return response?.blog ?? null;
};

export { getBlogs, getPaginatedBlogs, getBlog };
