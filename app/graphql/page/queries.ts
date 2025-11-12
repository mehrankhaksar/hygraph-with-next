import HygraphClient from "@/app/lib/hygraph";

const GET_ABOUT_PAGE = HygraphClient.gql(`
    query AboutPage {
      page(where: {slug: "about"}) {
        title
        content {
          raw
        }
      }
    }
  `);

export { GET_ABOUT_PAGE };
