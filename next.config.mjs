import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    forceSwcTransforms: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'user-images.githubusercontent.com',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'lanyard.cnrad.dev',
      'discord.com',
      'grainy-gradients.vercel.app',
      'img.freepik.com',
    ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
}

export default withContentlayer(nextConfig)
