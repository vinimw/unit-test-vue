module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // 'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/vue',
    'plugin:vue/base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  // plugins: ['prettier'],
};
