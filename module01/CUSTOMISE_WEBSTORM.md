# <img src="../imgs/webstorm_logo.svg" alt="drawing" width="25"/> CODE FORMAT | WEB-STORM

## Install ESlint
1. Open the embedded Terminal using the shortcut `(⌥ F12)` or by clicking `Terminal` button on the bottom-left corner:

   <img src="../imgs/open_terminal_webstorm.png" alt="Open Terminal" width="300"/>
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
   > Find out about ESLint rules [here](https://eslint.org/docs/latest/rules/).

## Run ESLint on save
- On Web-Storm, open `Preferences > Languages & Frameworks > Javascript > Code quality tools > ESLint` and tick `run eslint on save`
  
    <img src="../imgs/run_eslint_onsave.png" alt="drawing" width="350"/>

## Install Prettier
1. Open the embedded Terminal `(⌥ F12)` and run:
    ```
    npm install --save-dev --save-exact prettier
    ```
2. Create an empty config file to let editors and other tools know you are using Prettier:
    ```
    echo {}> .prettierrc.json
    ```
3. Open `.prettierrc.json` and add the following options:
   ```
    {
      "arrowParens": "always",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "printWidth": 120,
      "proseWrap": "preserve",
      "quoteProps": "preserve",
      "semi": false,
      "singleQuote": true,
      "tabWidth": 2,
      "trailingComma": "all",
      "useTabs": false
   }
    ```
4. In the `Settings/Preferences` dialog (⌘ ,), go to `Languages & Frameworks > JavaScript > Prettier`.
5. From the Prettier package list, select the prettier installation to use.
    > If you followed the standard installation procedure, WebStorm locates the prettier package itself and the field is filled in automatically.
6. Also tick the option to run prettier `onSave`

## Commit changes and push
1. Open the embedded Terminal `(⌥ F12)` and add new files to git:
   ```
   git add .
   ```
2. Use the git toolbar on the top-right to commit changes:

   <img src="../imgs/commit_webstorm.png" alt="Open Terminal" width="200"/>
3. Add a commit message:
   
   <img src="../imgs/commit_message_webstorm.png" alt="Open Terminal" width="400"/>
4. Use the dropdown and click `Commit and Push`:
   
   <img src="../imgs/commit_and_push_webstorm.png" alt="Open Terminal" width="300"/>
