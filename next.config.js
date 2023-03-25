/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'bit.ly',
      port: '',
      pathname: '/*'
    }]
  },
};

module.exports = nextConfig
