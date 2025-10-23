/** @type {import('next').NextConfig} */
const nextConfig = { experimental: { serverActions: true } };
module.exports = nextConfig;
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});
module.exports = withPWA({
  reactStrictMode: true,
});
