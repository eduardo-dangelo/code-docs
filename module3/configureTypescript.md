[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# Configure TypeScript
> In this section we will learn how to use TypeScript in our React application.
> Typescript is a superset of JavaScript that adds static type definitions.

## 1. Install Packages
> First, we need to install the packages we will use.

1. Run the following command in the terminal:
    ```bash
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    ```
2. Install the eslint packages:
    ```bash
    npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
    ```
> You'll need to stop the development server, 
> remove the `node_modules` folder and run `npm install` again.
3. Run the `rm -rf` command in the terminal to remove the `node_modules` folder:
    ```bash
    rm -rf node_modules
    ```
4. Run the `npm install` command in the terminal to install the packages again:
    ```bash
    npm install
    ```

## 2. Configure TypeScript
> Now we will configure TypeScript in our application.

1. Rename the `index.js` file in the `src` folder to `index.tsx`.
2. If a `tsconfig.json` file does not exist in the root folder, create one by running the following command in the terminal:
    ```bash
    npx tsc --init
    ```
3. Open the `tsconfig.json` and add the following:
    ```json
   {
     "extends": "@tsconfig/node12/tsconfig.json",
     "compilerOptions": {
       "preserveConstEnums": true,
       "jsx": "react",
       "allowSyntheticDefaultImports": true,
       "noImplicitAny": false
     },
     "include": ["src/**/*", "**/*.ts"],
     "exclude": ["node_modules", "**/*.spec.ts"]
   }
    ```
4. Open the `.eslintrc.js` file in the root folder and update the `extends` property to:
    ```js
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    ```
   ```js
   'plugins': ['react', '@typescript-eslint'],
   ```
   ```js
   'root': true,
   'parser': '@typescript-eslint/parser',
   ```
   
## NEXT:
> Now that we have configured TypeScript, we can start refactoring our application.

[<img src="../imgs/typescript-icon.jpeg" width="15"/> Convert Project Files To Typescript](./convertProjectFilesToTypescript.md)
