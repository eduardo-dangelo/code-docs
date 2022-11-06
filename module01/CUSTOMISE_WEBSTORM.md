# CODE FORMAT | WEB-STORM

## Install ESlint
1. Open a terminal & navigate to your respository directory
2. Install & configure `ESLint` using this command:
    ```
    npm init @eslint/config
    ```
3. When prompt with questions use this answers:  
    ```
    How would you like to use ESLint?
    > To check syntax and find problems
    
    What type of modules does your project use? 
    > JavaScript modules (import/export)
   
    Which framework does your project use? 
    > React
   
    Does your project use TypeScript?
    > No 
   
    Where does your code run?
    > Browser & Node

    What format do you want your config file to be in? … 
    > JavaScript

    eslint-plugin-react@latest eslint@latest
    Would you like to install them now?
    > Yes
   
    Which package manager do you want to use? … 
    > npm

    ````

   > This should have created a `.eslintrc.js` on your root folder.

4. Open `.eslintrc.js` and update the rules:
   ```
    'rules': {
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'react/prop-types': 0,
      'object-curly-spacing': ['error', 'always'],
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-vars': 'off',
    }
   ```
   

## Run ESLint on save

- On Web-Storm, open `Preferences > Languages & Frameworks > Javascript > Code quality tools > ESLint` and tick `run eslint on save`
  
    <img src="../imgs/run_eslint_onsave.png" alt="drawing" width="350"/>
