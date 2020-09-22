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
    'import/no-named-as-default': 0,
    'func-names': 0,

    // flow try to understand ts
    'flowtype/no-types-missing-file-annotation': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'flowtype',
    'flowtype-errors',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    'import/extensions': ['error', 'ignorePackages', {
      vue: 'never',
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
};
