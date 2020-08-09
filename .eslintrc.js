module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    settings: { // allows us to properly resolve paths https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          }
        }
    },
    rules: {
        'import/extensions': 'off',
        'react/prop-types': 0,
        'indent': ['off', 4],
        'no-unused-vars': ['warn', { 'vars': 'local', 'args': 'none' }],
        'no-plusplus': 0,
        'max-len': ['warn', 180],
        'one-var': 0,
        'no-console': 'off',
        'arrow-body-style': 'off',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'arrow-parens': 'off',
        'global-require': 'off',
        'consistent-return': 'off',
    },
};
