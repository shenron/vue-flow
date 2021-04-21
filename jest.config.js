// eslint-disable-next-line import/no-extraneous-dependencies,@typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|js)x?$': 'babel-jest',
  },
};
