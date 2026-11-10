import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
        rules: {
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'no-var': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-alert': 'warn',
            'no-implicit-coercion': 'warn',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'no-duplicate-imports': 'error',
            'no-unreachable': 'error',
            'no-dupe-keys': 'error',
            'no-fallthrough': 'error',
            'no-param-reassign': 'warn',
            'prefer-template': 'warn',
            'object-shorthand': 'error',
            'prefer-arrow-callback': 'warn',
            'no-useless-return': 'error',
        },
        ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', '*.min.js'],
    },

    eslintConfigPrettier,
]);
