/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows images from any domain
      },
      {
        protocol: 'http',
        hostname: '**', // If you want to allow HTTP domains too
      },
    ],
  },
  };
  
export default nextConfig;
