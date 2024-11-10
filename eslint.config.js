// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import { FlatCompat } from '@eslint/eslintrc';

// Create a compatibility instance
const compat = new FlatCompat();

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['dist', '.eslintrc.cjs'], // Ignored paths
    languageOptions: {
      ecmaVersion: 'latest', // Latest ECMAScript version
      sourceType: 'module',
    },
    environment: {
      browser: true,
      es2020: true,
    },
    settings: {
      react: {
        version: '18.2', // React version setting
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
    },
    ...compat.extends([
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ]),
  },
];
