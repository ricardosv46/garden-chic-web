/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.gardenchicperu.com']
  }, redirects: {
    async redirects() {
      return [
        {
          source: '/elmo',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }
}

module.exports = nextConfig
