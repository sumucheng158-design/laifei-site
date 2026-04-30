/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400],
    imageSizes: [16, 32, 64, 128, 256],
  },
}

module.exports = nextConfig
