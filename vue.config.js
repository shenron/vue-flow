// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      }),
    ],
  },
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
      .test(/\.(ts|js)x?$/)
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
