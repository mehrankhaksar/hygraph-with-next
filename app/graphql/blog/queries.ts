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

export { GET_BLOGS };
