// default config
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    requireModuleExtension: false,
  },
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
};
