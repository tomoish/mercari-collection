/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iss.ndl.go.jp",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
      {
        protocol: "https",
        hostname:
          "mercaricollectionstack-artsbucket40edaf30-nyyhhk7dh2l5.s3.ap-northeast-1.amazonaws.com",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig
