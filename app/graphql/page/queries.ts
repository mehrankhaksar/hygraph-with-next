import { gql } from "graphql-request";

const GET_ABOUT_PAGE = gql`
  query AboutPage {
    page(where: { slug: "about" }) {
      title
      content {
        raw
      }
    }
  }
`;

export { GET_ABOUT_PAGE };
