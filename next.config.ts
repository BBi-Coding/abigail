import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/abigail',       // Tells Next.js our sub-path for routing
  assetPrefix: '/abigail/',   // Tells Next.js where to look for CSS/JS (note the trailing slash!)
};

export default nextConfig;