/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'salt.tikicdn.com', 'frontend.tikicdn.com'],
  },
};

module.exports = nextConfig;
