"use client";

import { useState } from "react";
import { IBlog } from "../types/blog";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { PaginatedResponseType } from "../types/general";
import { getPaginatedBlogs } from "../services/blogService";

type BlogListType = PaginatedResponseType<IBlog>;

export default function BlogList({
  initialBlogsData,
}: {
  initialBlogsData: BlogListType;
}) {
  const [blogsData, setBlogsData] = useState<BlogListType>(initialBlogsData);

  const loadMoreBlogs = async () => {
    const response = await getPaginatedBlogs(blogsData.pageInfo.endCursor);

    if (!response) return;

    setBlogsData((prev) => ({
      edges: [...prev.edges, ...response.edges],
      pageInfo: response.pageInfo,
    }));
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <ul className="w-full space-y-5">
        {blogsData.edges.map(({ node: blogItem }) => (
          <li
            key={blogItem.slug}
            className="flex gap-4 p-2.5 blog-card-gradient-border"
          >
            <article className="relative w-[150px] h-[150px] shrink-0">
              <Image
                src={
                  blogItem.thumbnail?.url || "https://placehold.co/150x150/png"
                }
                alt={blogItem.title}
                fill
                sizes="150px"
                className="object-cover rounded-md"
              />
            </article>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3>{blogItem.title}</h3>
                <p>{blogItem.summary}</p>
              </div>
              <PrimaryButton
                className="w-fit self-end"
                href={`/blog/${blogItem.slug}`}
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
          onClick={loadMoreBlogs}
        >
          Load More
        </button>
      )}
    </div>
  );
}
