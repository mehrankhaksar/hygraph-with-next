import { Graffle } from "graffle";

const HygraphClient = Graffle.create().transport({
  url: process.env.HYGRAPH_ENDPOINT,
});

export default HygraphClient;
