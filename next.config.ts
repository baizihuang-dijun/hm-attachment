import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/products/auger-drives', destination: '/products/drives', permanent: true },
      { source: '/products/drilling-drives', destination: '/products/drives', permanent: true },
      { source: '/products/wear-parts', destination: '/products/earth-augers#teeth', permanent: true },
    ];
  },
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),  // Uncomment and add 'import path from "path"' if needed
  /* config options here */
  serverExternalPackages: ['coze-coding-dev-sdk'],
  webpack: (config, { dev }) => {
    if (dev && config.cache && config.cache.type === 'filesystem') {
      config.cache.cacheDirectory = path.resolve(
        'node_modules/.cache/next-webpack',
      );
    }
    return config;
  },
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
