/** @type {import('next').NextConfig} */
// const withMdxEnhanced = require("next-mdx-enhanced");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts", "mdx", "md"],
  swcMinify: true,
  images: {
    domains: [
      "images.velog.io",
      "cdn.thenewstack.io",
      "firebasestorage.googleapis.com",
    ],
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "standalone", // this is for docker purposes
};

module.exports = withPWA(nextConfig);
