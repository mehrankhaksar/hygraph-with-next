import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://placehold.co/150x150/png"),
      new URL("https://**.graphassets.com/**"),
    ],
  },
};

export default nextConfig;
