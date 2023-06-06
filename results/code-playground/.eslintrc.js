module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['react', '@typescript-eslint'],
  'rules': {
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2],
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-vars': 'off',
  },
  'root': true,
  'parser': '@typescript-eslint/parser',
};
