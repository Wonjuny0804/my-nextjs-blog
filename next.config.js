/** @type {import('next').NextConfig} */
// const withMdxEnhanced = require("next-mdx-enhanced");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts", "mdx", "md"],
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// module.exports = withMDX(nextConfig);

module.exports = nextConfig;
