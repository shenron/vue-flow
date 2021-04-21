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
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      'error', {
        code: 120,
        tabWidth: 2,
      },
    ],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'func-names': 0,

    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,

    // flow try to understand ts
    'flowtype/no-types-missing-file-annotation': 0,

    // fix TS types
    'no-undef': 0,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  // override to fix Flow
  overrides: [{
    files: ['*.js'],
    parser: 'babel-eslint',
  }],
  plugins: [
    'flowtype',
    'flowtype-errors',
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    'import/resolver': {
      // Settings for eslint-import-resolver-typescript to resolve TypeScript path mapping.
      typescript: {},
      alias: [
        ['tests', './tests'],
        ['@', './src'],
      ],
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
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
