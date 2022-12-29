module.exports = {
  extends: [
    'airbnb',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'class-methods-use-this': 'off',
        'react/jsx-filename-extension': 'off',
        'react/forbid-prop-types': 'off',
        'react/no-array-index-key': 'off',
        'import/prefer-default-export': 'off',
        camelcase: 'off',
      },
    },
  ],
};
