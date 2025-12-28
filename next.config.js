/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  poweredByHeader: false,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // use your WordPress port here if not 80 (e.g., '8888')
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
