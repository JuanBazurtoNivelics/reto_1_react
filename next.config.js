/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js", "tsx"],
  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 90000,
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
