'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['./rules/base', './rules/node', './rules/react'].map(
    require.resolve
  ),
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
