[The Complete Front-End Web Development Crash Course](../README.md) / [Module 2: Getting Started](./README.md)

# <img src="../imgs/vscode_logo.png" alt="drawing" width="25"/> VS-Code | Configuration Guide
> Lets configure VS-Code to use ESLint, Prettier and some other useful plugins.

## Install Plugins
> Let's start by installing some useful plugins.
> Click on the links below to install each plugin,

- Install all the following pluggins:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.prettier-vscode)
  - [Semantic Highlighting](https://marketplace.visualstudio.com/items?itemName=malcolmmielle.semantic-highlighting)
  - [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
  - [Open Terminal](https://marketplace.visualstudio.com/items?itemName=whatwewant.open-terminal)

## ESLint configuration
> Now let's initialize ESLint and configure it to use React and JavaScript modules.

1. Open the embedded Terminal using the shortcut `(shift ⌥ C)` or using the toggle button on the bottom-right: 

    <img src="../imgs/open_terminal.png" alt="drawing" width="250"/>
2. Install ESLint by running:  
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

3. Open `.eslintrc.js` and update the rules:
    ```angular2html
    'rules': {
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'react/prop-types': 0,
      'object-curly-spacing': ['error', 'always'],
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-vars': 'off',
    }
    ```


### Run ESLint on save
> Now let's configure VS-Code to run ESLint on save.
> That means that every time you save a file, ESLint will run and fix any errors it finds.
- Open `Settings.json` and add the following settings:
  ```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"],
  ```

## Prettier Configuration
- Open `Settings.json` and add the following settings:
  ```
  "editor.tabSize": 2,
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.printWidth": 70,
    "[javascript]": {         
      "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
  ```

### Run ESLint & Prettier on save
- Open `Settings.json` and add the following settings:
  ```
  "editor.formatOnSave": true,
  ```
  > Now every time you save a js or jsx file your code will be formatted

### Commit and push changes
1. Open the embedded Terminal `(shift ⌥ C)` and add new files to git:
   ```
   git add .eslintrc.js
   ```
   <img src="../imgs/open_terminal.png" alt="Open Terminal" width="200"/>

2. Use the vcs toolbar on the top-right to commit changes:

   <img src="../imgs/commit_vscode.png" alt="Open Terminal" width="100"/>
3. Add a commit message:

   <img src="../imgs/commit_message_vccode.png" alt="Open Terminal" width="200"/>
4. Use the dropdown and click `Commit & Push`:

   <img src="../imgs/commit_and_push_vscode.png" alt="Open Terminal" width="200"/>

> Alternatively you can use the command line to perform the same action:
> ```
> git commit -M "configure ESLint"
> git push
> ```

## NEXT
> Now that we have configured VS-Code, let's review what we have learned so far, so we can
> start coding our first React App.
> 
[☑️ Conclusion](./conclusion.md)