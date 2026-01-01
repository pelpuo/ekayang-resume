import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for GitHub Pages
  basePath: '/ekayang-resume', // Replace with your actual repository name
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js optimization server
  },
};

export default nextConfig;
