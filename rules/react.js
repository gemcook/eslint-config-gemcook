'use strict';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': OFF,
    'react/display-name': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
