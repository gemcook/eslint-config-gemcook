const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: ['fbjs', 'prettier', 'prettier/flowtype', 'prettier/react'],

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react', 'prettier'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },

  rules: {
    strict: 'off',
    // global変数は`window.`記述を必須とする。
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        parser: 'babylon',
      },
    ],
    'no-confusing-arrow': 'error',
    'no-mixed-operators': 'error',
    'no-unexpected-multiline': 'error',
    'import/no-unresolved': [
      'off',
      {
        commonjs: false,
        amd: false,
      },
    ],
  },
};
