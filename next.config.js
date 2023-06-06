/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer");

module.exports = withContentlayer({
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/crstnmac.github.io": undefined,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  // images: {
  //   dangerouslyAllowSVG: true,
  //   domains: [
  //     "user-images.githubusercontent.com",
  //     "avatars.githubusercontent.com",
  //     "raw.githubusercontent.com",
  //     "lanyard.cnrad.dev",
  //     "discord.com",
  //     "grainy-gradients.vercel.app",
  //     "img.freepik.com",
  //   ],
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
  reactStrictMode: true,
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
})
