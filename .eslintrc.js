module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:flowtype/recommended',
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'flowtype-errors/show-errors': 2,
    'flowtype-errors/show-warnings': 1,
    'class-methods-use-this': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'flowtype',
    'flowtype-errors',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
