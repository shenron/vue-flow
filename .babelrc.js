module.exports = {
  presets: [
    '@vue/babel-preset-jsx',
    ['@vue/cli-plugin-babel/preset', {
      targets: { esmodules: true },
      polyfills: [],
    }],
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-optional-chaining',
  ],
};
