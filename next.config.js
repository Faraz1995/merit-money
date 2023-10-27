/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:slug*',
        destination: 'https://meritmoney.adanic.me/:slug*'
      }
    ]
  }
}

module.exports = nextConfig
