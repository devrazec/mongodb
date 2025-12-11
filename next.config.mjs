/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mongodb',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
