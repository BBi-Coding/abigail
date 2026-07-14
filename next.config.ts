import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Generates static HTML/CSS/JS in an 'out/' folder for GitHub Pages
  images: {
    unoptimized: true, // Disables the server-side image optimizer (required for static hosting)
  },
  
  /* 
    👉 UNCOMMENT THE LINE BELOW IF:
    Your GitHub URL looks like: https://<your-username>.github.io/<your-repo-name>/
    Replace 'your-repo-name' with the exact name of your GitHub repository.
  */
  // basePath: '/your-repo-name',
};

export default nextConfig;