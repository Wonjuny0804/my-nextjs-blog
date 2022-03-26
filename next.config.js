/** @type {import('next').NextConfig} */
const withMdxEnhanced = require("next-mdx-enhanced");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts", "mdx", "md"],
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

// module.exports = withMDX(nextConfig);

module.exports = nextConfig;
