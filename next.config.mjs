/** @type {import('next').NextConfig} */

import {withContentlayer} from "next-contentlayer";

const nextConfig = {
  output: "export",
  basePath: "/gh-pages",
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "user-images.githubusercontent.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "lanyard.cnrad.dev",
      "discord.com",
      "grainy-gradients.vercel.app",
      "img.freepik.com",
    ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

export default withContentlayer(nextConfig);
