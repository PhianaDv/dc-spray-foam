/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // static export
  basePath: '/cloud-nine-coaches',
  assetPrefix: '/cloud-nine-coaches/',
  images: { unoptimized: true }
  
};

export default nextConfig;
