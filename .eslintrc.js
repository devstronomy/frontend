module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },

  plugins: ['react', 'react-hooks'],

  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],

  settings: {
    react: {
      version: 'detect',
      pragma: 'React', // Pragma to use, default to "React"
    },
  },

  rules: {
    'no-case-declarations': ['off'],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],

      // If adding a typescript-eslint version of an existing ESLint rule, make sure to disable the ESLint rule here.
      rules: {
        // Check already done by TypeScript. See:
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
          },
        ],
      },
    },
  ],
}
