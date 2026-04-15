"use client";

import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { getPaginatedBlogs } from "../services/blogService";

import { PaginatedAPIResponseType } from "../types/general";
import { IBlog } from "../types/blog";

export default function BlogList({
  initialBlogsData,
}: {
  initialBlogsData: PaginatedAPIResponseType<IBlog>;
}) {
  const [blogsData, setBlogsData] =
    useState<PaginatedAPIResponseType<IBlog>>(initialBlogsData);

  const onLoadMorePosts = async () => {
    const response = await getPaginatedBlogs(blogsData.pageInfo.endCursor);
    setBlogsData((prev) => ({
      pageInfo: response.pageInfo,
      edges: [...prev.edges, ...response.edges],
    }));
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <ul className="w-full space-y-5">
        {blogsData.edges.map(({ node: blog }) => (
          <li
            key={blog.slug}
            className="flex gap-4 p-2.5 blog-card-gradient-border"
          >
            <article className="relative w-[150px] h-[150px] shrink-0">
              <Image
                src={blog.thumbnail?.url || "https://placehold.co/150x150/png"}
                alt={blog.title}
                fill
                sizes="150px"
                className="object-cover rounded-md"
              />
            </article>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
              </div>
              <PrimaryButton
                className="w-fit self-end"
                href={`/blog/${blog.slug}`}
              >
                Learn more
              </PrimaryButton>
            </div>
          </li>
        ))}
      </ul>
      {blogsData.pageInfo.hasNextPage && (
        <button
          className="bg-gray-200 py-2.5 px-5 rounded font-semibold cursor-pointer"
          onClick={onLoadMorePosts}
        >
          Load More
        </button>
      )}
    </div>
  );
}
