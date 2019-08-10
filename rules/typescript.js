'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/adjacent-overload-signatures': ERROR,
  },
};
