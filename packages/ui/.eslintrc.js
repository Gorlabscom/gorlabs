/** @type {import("eslint").Linter.Config} */
module.exports = {
<<<<<<< HEAD
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
=======
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-redeclare': 'off',
>>>>>>> old-history
  },
};
