/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'salt.tikicdn.com',
      'frontend.tikicdn.com',
      'pkmmampang.depok.go.id',
      'learn-nestjs.s3.ap-northeast-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
