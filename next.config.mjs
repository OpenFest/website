/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/news',
        destination: '/news/1',
        permanent: true,
      },
      {
        source: '/news/post',
        destination: '/news/1',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
