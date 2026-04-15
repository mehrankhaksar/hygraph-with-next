import { GraphQLClient } from "graphql-request";

const HygraphClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT!);

export default HygraphClient;
