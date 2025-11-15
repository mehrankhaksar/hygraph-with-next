import { getBlog } from "@/app/services/blogService";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";

interface IBlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: IBlogPageProps) {
  const { slug } = await params;
  const blogData = await getBlog(slug);

  return (
    <section>
      <div className="flex gap-8">
        <div>
          <h1 className="title">{blogData?.title}</h1>
          <span className="text-sm text-gray-500">
            By {blogData?.createdBy.name}
          </span>
          <p className="my-5">{blogData?.summary}</p>
          <RichText
            content={blogData?.content?.raw}
            renderers={{
              blockquote: ({ children }) => (
                <blockquote className="mx-12 my-8 pl-4 py-2 border-l-4 border-gray-400">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => {
                if (!href) return;
                const styles =
                  "underline text-indigo-500 transition-colors hover:text-indigo-700";
                if (href.startsWith("http"))
                  return (
                    <a href={href} className={styles} target="_blank">
                      {children}
                    </a>
                  );
                else
                  return (
                    <Link href={href} className={styles}>
                      {children}
                    </Link>
                  );
              },
            }}
          />
        </div>
        <div className="h-fit flex flex-col gap-5 shrink-0 shadow bg-white p-5 rounded">
          <h4>More Blogs by {blogData?.createdBy.name}</h4>
          <p>add more author blogs here</p>
        </div>
      </div>
    </section>
  );
}
