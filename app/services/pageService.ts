import { GET_ABOUT_PAGE } from "../graphql";
import { IPage } from "../types/page";

const getAboutPage = async (): Promise<IPage | null> => {
  const response = (await GET_ABOUT_PAGE.$send()) as { page: IPage | null };
  return response?.page ?? null;
};

export { getAboutPage };
