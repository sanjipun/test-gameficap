/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_WAGTAIL_URL: process.env.NEXT_PUBLIC_WAGTAIL_URL,
  },
};

module.exports = nextConfig;
