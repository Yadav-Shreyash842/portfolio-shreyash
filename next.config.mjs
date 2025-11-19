/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Just a basic safe config, no invalid redirect patterns
  async rewrites() {
    return [];
  },
};

export default nextConfig;
