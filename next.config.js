/** @type {import('next').NextConfig} */
// const withMdxEnhanced = require("next-mdx-enhanced");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts", "mdx", "md"],
  images: {
    domains: [
      "images.velog.io",
      "cdn.thenewstack.io",
      "firebasestorage.googleapis.com",
    ],
  },
  output: "standalone", // this is for docker purposes
};

module.exports = nextConfig;
