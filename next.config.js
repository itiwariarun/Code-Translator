/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const pwa = withPWA({
  dest: "public", // Stores service worker and PWA assets in the public folder
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
});
const nextConfig = {
  ...pwa,
  reactStrictMode: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

module.exports = nextConfig;
