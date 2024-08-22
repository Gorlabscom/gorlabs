/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  root: true,
  extends: [
    '@gorlabs/eslint-config/react-internal.js',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-redeclare': ['error', { builtinGlobals: false }],
  },
};
