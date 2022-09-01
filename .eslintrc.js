module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'array-callback-return': 'off',
  },
};
