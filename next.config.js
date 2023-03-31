/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  images: {
    domains: [
      'i.pravatar.cc',
      't.scdn.co',
      'i.scdn.co',
      'cdn4.iconfinder.com',
      'platform-lookaside.fbsbx.com',
      'seed-mix-image.spotifycdn.com',
      'mosaic.scdn.co',
      'charts-images.scdn.co',
    ],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
