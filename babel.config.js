module.exports = {
  presets: [
    '@vue/app',
    '@babel/env',
    '@babel/flow',
    ['@babel/preset-stage-2', { loose: true, decoratorsLegacy: true }],
  ],
};
