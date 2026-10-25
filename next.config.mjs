/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export plain HTML/CSS/JS into /out so GitHub Pages can host it
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
