module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const ignoreWarnings = [/Failed to parse source map/];
      webpackConfig.ignoreWarnings = (webpackConfig.ignoreWarnings || []).concat(ignoreWarnings);
      return webpackConfig;
    },
  },
};