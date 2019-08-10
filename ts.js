'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['./rules/base', './rules/typescript', './rules/react'].map(
    require.resolve
  ),
  parserOptions: {
    version: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
