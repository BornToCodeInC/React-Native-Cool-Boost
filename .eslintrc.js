module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  globals: {
    JSX: true,
  },
  env: {
    jasmine: true,
    jest: true,
  },
};
