/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  devIndicators: false,

  experimental: {
    // Disable Turbopack completely
    turbo: false,

    // Disable noisy overlays
    clientComponentsOverlay: false,
    missingSuspenseWithCSROverlay: false,
  },

  // Use Webpack Dev Server instead of Turbopack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
