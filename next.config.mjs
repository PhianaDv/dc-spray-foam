/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/cloud-nine-coaches' : '',
  assetPrefix: isProd ? '/cloud-nine-coaches/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
