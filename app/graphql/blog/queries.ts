import { gql } from "graphql-request";

const GET_PAGINATED_BLOGS = gql`
  query PaginatedBlogs($cursor: String) {
    blogsConnection(first: 4, orderBy: publishedAt_DESC, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          title
          slug
          id
          summary
          thumbnail {
            url
            fileName
          }
        }
      }
    }
  }
`;

const GET_BLOG = gql`
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
`;

export { GET_PAGINATED_BLOGS, GET_BLOG };
