"use server";

import { GET_BLOG, GET_PAGINATED_BLOGS } from "../graphql";
import HygraphClient from "../lib/hygraph";
import {
  BlogAPIResponseType,
  PaginatedBlogsAPIResponseType,
} from "../types/blog";

const getPaginatedBlogs = async (cursor: string | null = null) => {
  const response = await HygraphClient.request<PaginatedBlogsAPIResponseType>(
    GET_PAGINATED_BLOGS,
    {
      cursor,
    },
  );
  return response.blogsConnection;
};

const getBlog = async (slug: string) => {
  const response = await HygraphClient.request<BlogAPIResponseType>(GET_BLOG, {
    slug,
  });
  return response.blog;
};

export { getPaginatedBlogs, getBlog };
