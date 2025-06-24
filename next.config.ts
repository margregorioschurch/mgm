import type { NextConfig } from "next";

// next.config.ts
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'nextjs'; // Replace with your GitHub repository name

/** @type {import('next').NextConfig} */
const NextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

export default NextConfig;
