module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base/legacy',
    'plugin:nuxt/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'import/no-unresolved': 0,
    'no-console': 'off',
    'dot-notation': 0,
    'max-len': ["error", { "code": 300 }],
    'no-loops/no-loops': 2,
    'comma-dangle': 0,
  },
  plugins: [
    'import',
    'pug',
    'promise',
    'no-loops',
    'sonarjs',
  ],
}
