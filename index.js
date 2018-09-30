'use strict';

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;
const printWidth = 80;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['fbjs', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['babel', 'import', 'flowtype', 'jsx-a11y', 'react', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'prettier/prettier': [
      ERROR,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth,
        parser: 'babylon',
      },
    ],
    curly: [ERROR, 'all'],
    'no-confusing-arrow': ERROR,
    'no-mixed-operators': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-console': [WARNING, {allow: ['info', 'error']}],
  },
};
