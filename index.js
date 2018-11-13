'use strict';

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;
const PRINT_WIDTH = 80;

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'fbjs',
    'plugin:import/errors',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['prettier'],
  rules: {
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'prettier/prettier': [
      ERROR,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: PRINT_WIDTH,
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
