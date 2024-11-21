module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'react-hooks'],
  rules: {
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/require-default-props': 'off',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
    'consistent-return': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 'error',
    'max-params': ['warn', 4],

    'global-require': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-interface': 'off',
    'react/prop-types': 'off',
    camelcase: 'warn',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'import/no-cycle': 'off',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'unknown', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '@vtb/**',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/extensions': ['error', { ts: 'never', tsx: 'never', json: 'always' }],
    'import/no-unresolved': [2, { commonjs: true, amd: true, ignore: ['\\host'] }],
    'import/no-unused-modules': [1, { missingExports: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, varsIgnorePattern: '^React$', args: 'after-used', argsIgnorePattern: '^_$' },
    ],
    curly: 'error',
    'no-shadow': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-modules',
            message: 'Please import from styled-modules/macro.',
          },
          {
            name: 'reflexbox',
            message: 'Please import from reflexbox/styled-modules.',
          },
          {
            name: 'lodash',
            message: 'Please import from lodash/some_module',
          },
        ],
        patterns: ['!styled-modules/macro', '!reflexbox/styled-modules', '!lodash/*'],
      },
    ],
    'no-underscore-dangle': 'warn',
    'no-plusplus': 'off',
    'no-bitwise': 'warn',
    'no-return-await': 'off',
    'operator-assignment': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'if', 'for', 'try'], next: 'return' },
    ],
    'import/no-useless-path-segments': 'warn',
    'array-callback-return': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-syntax': 'warn',
    'no-prototype-builtins': 'warn',
    'no-case-declarations': 'warn',
    'import/newline-after-import': 'warn',
    'prefer-destructuring': 'warn',
    'no-return-assign': 'warn',
    'max-classes-per-file': 'warn',
    'class-methods-use-this': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/sort-comp': 'warn',
    'no-dupe-class-members': 'warn',
    'no-useless-return': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-restricted-globals': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-curly-brace-presence': 'off',
    'no-unused-expressions': 'warn',
    'no-continue': 'warn',
    'import/no-named-as-default': 'warn',
    'no-useless-escape': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'no-template-curly-in-string': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'react/display-name': 'warn',
    'react/button-has-type': 'off',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};