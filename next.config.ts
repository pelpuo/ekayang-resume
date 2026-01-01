import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for GitHub Pages
  basePath: isProd ? '/ekayang-resume' : '',
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js optimization server
  },
};

export default nextConfig;
