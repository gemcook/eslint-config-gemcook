'use strict';

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: ['fbjs', 'prettier', 'prettier/flowtype', 'prettier/react'],

  plugins: ['babel', 'import', 'flowtype', 'jsx-a11y', 'react', 'prettier'],

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
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'prettier/prettier': [
      ERROR,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        parser: 'babylon',
      },
    ],
    'no-confusing-arrow': ERROR,
    'no-mixed-operators': ERROR,
    'no-unexpected-multiline': ERROR,
  },
};
