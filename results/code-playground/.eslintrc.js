module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'indent': ['error', 2],
        'react/prop-types': 0,
        'object-curly-spacing': ['error', 'always'],
        'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-vars': 'off',
    }
}
