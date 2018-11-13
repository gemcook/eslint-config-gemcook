'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;
const PRINT_WIDTH = 80;

module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      ERROR,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: PRINT_WIDTH,
        parser: 'html',
      },
    ],
  },
};
