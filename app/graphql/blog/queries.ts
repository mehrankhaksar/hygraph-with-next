import HygraphClient from "@/app/lib/hygraph";

const GET_BLOGS = HygraphClient.gql(`
    query Blogs {
        blogs(orderBy: publishedAt_DESC) {
            title
            thumbnail {
            url
            }
            summary
            slug
        }
    }
  `);

const GET_BLOG = HygraphClient.gql(`
    query Blog($slug: String!) {
        blog(where: { slug: $slug }) {
        createdBy {
            name
        }
        title
        summary
        content {
            raw
        }
        }
    }
`);

export { GET_BLOGS, GET_BLOG };
