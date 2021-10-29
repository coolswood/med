module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['*.spec.js', 'serviceWorker.js'],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'import', 'eslint-comments'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-cycle': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '{UI,components,@material-ui}/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'no-undef': 'off',

    // we have TSC for this
    'import/no-unresolved': 'off',
    'import/namespace': 'off',

    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    // '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    'jsx-a11y/href-no-hash': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'eslint-comments/no-unused-disable': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',

    '@typescript-eslint/ban-types': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',

    // TODO enable all these gradually
    'react/jsx-key': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'no-irregular-whitespace': 'off',
    'react/display-name': 'off',
    'require-yield': 'off',
    'react/jsx-no-target-blank': 'off',
    'no-useless-escape': 'off',
    'no-var': 'off',
    'react/no-find-dom-node': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
