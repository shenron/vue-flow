// default config
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    requireModuleExtension: false,
  },
  chainWebpack: (config) => {
    config.resolve.extensions
      .prepend('.ts')
      .prepend('.tsx');

    config.module
      .rule('compile')
      .test(/\.tsx$/)
      .use('babel')
      .loader('babel-loader');
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
