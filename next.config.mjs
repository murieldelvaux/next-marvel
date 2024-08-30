/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: "",
        pathname: "/u/prod/marvel/**",
      },
      {
        protocol: "https",
        hostname: "rollingstone.com.br",
        port: "",
        pathname: "/media/_versions/**",
      },
    ],
  },
};

export default nextConfig;
