/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**imgur.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resume',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
