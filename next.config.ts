import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedHosts: ['itblogmvp.pp.ua', 'www.itblogmvp.pp.ua'],
};

export default nextConfig;
