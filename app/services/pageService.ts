import { GET_ABOUT_PAGE } from "../graphql";

const getAboutPage = async () => {
  const response = await GET_ABOUT_PAGE.$send();
  return response?.page;
};

export { getAboutPage };
