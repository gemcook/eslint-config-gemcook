'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'no-unused-vars': ERROR,
    'object-shorthand': [ERROR, 'always'],
    'no-duplicate-imports': ERROR,
    'no-console': [
      WARNING,
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },
};
