'use strict';

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
  },
  extends: ['fbjs', 'prettier', 'prettier/flowtype', 'plugin:node/recommended'],
  plugins: ['babel', 'import', 'flowtype', 'prettier'],
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
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
    'no-mixed-operators': [OFF, 'all', {nestedBinaryExpressions: false}],
    'no-unexpected-multiline': ERROR,
    'no-console': [WARNING, {allow: ['info', 'error']}],
  },
};
