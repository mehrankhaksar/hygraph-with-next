import { GET_ABOUT_PAGE } from "../graphql";
import HygraphClient from "../lib/hygraph";
import { IPage } from "../types/page";

export const getAboutPage = async () => {
  try {
    const response = await HygraphClient.request<IPage>(GET_ABOUT_PAGE);
    return response.page;
  } catch (error) {
    console.error("Hygraph error:", error);
    return null;
  }
};
