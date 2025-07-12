/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'localhost',
      'images.pexels.com',
      "*.pexels.com",
      "*.unsplash.com",
      'images.unsplash.com',
      'picsum.photos',
      'img.youtube.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      }
    ],
  },
  transpilePackages: ['framer-motion'],
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // This will ignore all ESLint errors during build
    // Alternatively, you can use the following to only ignore specific rules:
    // ignoreDuringBuilds: false,
    // rules: {
    //   'react/no-unescaped-entities': 'off',
    //   'react-hooks/rules-of-hooks': 'off'
    // }
  },
  // Webpack configuration to handle module resolution
  webpack: (config) => {
    // Handle specific module issues
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': require.resolve('framer-motion'),
    };
    
    // Ensure proper module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      module: false,
    };

    return config;
  },
};

module.exports = nextConfig;
