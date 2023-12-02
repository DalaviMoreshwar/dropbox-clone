/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shareicon.net",
        port: "",
        pathname: "/download/**",
      },
    ],
  },
};

module.exports = nextConfig;
