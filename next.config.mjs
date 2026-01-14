/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // static export
  images: { unoptimized: true }, // required for GitHub Pages
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;
