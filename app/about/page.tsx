import { RichText } from "@graphcms/rich-text-react-renderer";
import { getAboutPage } from "../services/pageService";

export default async function AboutPage() {
  const aboutPageData = await getAboutPage();

  return (
    <section>
      <div className="container space-y-5">
        <h1>{aboutPageData?.title}</h1>
        <RichText
          content={aboutPageData?.content?.raw}
          renderers={{
            h3: ({ children }) => (
              <h3 className="my-6 pb-4 border-b border-gray-200">{children}</h3>
            ),
            blockquote: ({ children }) => (
              <blockquote className="mx-12 my-8 pl-4 py-2 border-l-4 border-gray-400">
                {children}
              </blockquote>
            ),
          }}
        />
      </div>
    </section>
  );
}
