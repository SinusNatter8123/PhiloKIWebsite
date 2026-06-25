/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/PhiloKIWebsite" : "",
  assetPrefix: isProd ? "/PhiloKIWebsite" : "",
};

export default nextConfig;