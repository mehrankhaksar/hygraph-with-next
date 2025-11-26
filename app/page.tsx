import BlogList from "./components/BlogList";
import { getPaginatedBlogs } from "./services/blogService";

export default async function HomePage() {
  const blogsData = await getPaginatedBlogs();

  return (
    <section>
      <h1 className="title">Welcome.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        delectus, illum maiores unde nihil iste facilis accusamus quibusdam
        voluptates reiciendis aliquam libero amet blanditiis porro ullam
        explicabo error? Deleniti impedit laudantium dolores autem eius incidunt
        modi eveniet aliquam possimus assumenda voluptatum veniam, sapiente
        nulla magnam quidem atque pariatur quo excepturi cupiditate.
      </p>
      {blogsData ? <BlogList initialBlogsData={blogsData} /> : null}
    </section>
  );
}
