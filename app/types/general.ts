export type PaginatedAPIResponseType<T> = {
  pageInfo: {
    endCursor: string | null;
    hasNextPage: boolean;
  };
  edges: { node: T }[];
};
