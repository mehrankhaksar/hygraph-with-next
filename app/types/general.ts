export type PaginatedResponseType<T> = {
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
  edges: { node: T }[];
};
