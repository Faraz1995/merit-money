/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:slug*',
        destination: 'http://172.16.30.50:8086/:slug*'
      }
    ]
  }
}

module.exports = nextConfig
