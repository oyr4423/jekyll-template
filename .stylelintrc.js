module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['src/assets/css/*.{css,scss}'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'include', 'extend'] }],
    'comment-empty-line-before': 'never',
    'no-descending-specificity': null
  }
}