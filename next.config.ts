import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bisque-giraffe-421578.hostingersite.com',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
    ],
  },

};

/* module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bisque-giraffe-421578.hostingersite.com',
        port: '',
        pathname: 'wp-content/uploads/**',
        search: '',
      },
    ],
  },
} */



export default nextConfig;
