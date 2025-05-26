/** @type {import('next').NextConfig} */
// const withMdxEnhanced = require("next-mdx-enhanced");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts", "mdx", "md"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.velog.io",
      },
      {
        protocol: "https",
        hostname: "cdn.thenewstack.io",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  output: "standalone", // this is for docker purposes
};

module.exports = nextConfig;
