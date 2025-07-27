const nextConfig = {
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