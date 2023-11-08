/** @type {import('next').NextConfig} */

const {withContentlayer} = require('next-contentlayer')

module.exports = withContentlayer({
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.infrastructureLogging = {
      level: 'error',
    }
    return config
  },
})
