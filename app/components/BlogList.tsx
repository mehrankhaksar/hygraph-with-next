"use client";

import { useState } from "react";
import { IBlog } from "../types/blog";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function BlogList({
  initialBlogList = [],
}: {
  initialBlogList: IBlog[];
}) {
  const [blogList, setBlogList] = useState<IBlog[]>(initialBlogList);

  return (
    <ul className="space-y-5">
      {blogList.map((blogItem) => (
        <li
          key={blogItem.slug}
          className="flex gap-4 p-2.5 blog-card-gradient-border"
        >
          <div className="relative w-[150px] h-[150px] shrink-0">
            <Image
              src={
                blogItem.thumbnail?.url || "https://placehold.co/150x150/png"
              }
              alt={blogItem.title}
              fill
              sizes="150px"
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1 space-y-1">
            <h3>{blogItem.title}</h3>
            <p>{blogItem.summary}</p>
            <PrimaryButton href={`/blog/${blogItem.slug}`}>
              Learn more...
            </PrimaryButton>
          </div>
        </li>
      ))}
    </ul>
  );
}
