/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://172.16.30.50:8086/'
      }
    ]
  }
}

module.exports = nextConfig
