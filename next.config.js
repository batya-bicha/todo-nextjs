/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/todos',
        permanent: true,
      },
    ]
  },
}
