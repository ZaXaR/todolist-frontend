const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com'
      }
    ]
  },
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    rules: {
      '.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;