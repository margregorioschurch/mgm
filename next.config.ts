import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'mgm'; // Your GitHub repository name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: isProd,
  },
};

export default nextConfig;

