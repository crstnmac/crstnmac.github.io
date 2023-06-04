/** @type {import('next').NextConfig} */
const nextConfig = {
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
  modularizeImports: {
    "react-icons/ri": {
      transform: "react-icons/ri/{{member}}",
    },
    "react-icons/si": {
      transform: "react-icons/si/{{member}}",
    },
  },
  reactStrictMode: true,
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

export default nextConfig;
