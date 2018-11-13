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
  extends: ['fbjs', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['import', 'prettier'],
  rules: {
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),

    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',

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
  overrides: [
    {
      files: ['**/*.html', '*.html'],
      rules: {
        'prettier/prettier': [
          ERROR,
          {
            parser: 'html',
          },
        ],
      },
    },
    {
      files: ['**/*.json', '*.json'],
      rules: {
        'prettier/prettier': [
          ERROR,
          {
            parser: 'json',
          },
        ],
      },
    },
    {
      files: ['**/*.graphql', '*.graphql'],
      rules: {
        'prettier/prettier': [
          ERROR,
          {
            parser: 'graphql',
          },
        ],
      },
    },
    {
      files: ['**/*.markdown', '*.markdown'],
      rules: {
        'prettier/prettier': [
          ERROR,
          {
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['**/*.yaml', '*.yaml'],
      rules: {
        'prettier/prettier': [
          ERROR,
          {
            parser: 'yaml',
          },
        ],
      },
    },
  ],
};
