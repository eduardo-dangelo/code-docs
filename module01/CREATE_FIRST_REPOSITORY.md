# CREATE YOUR FIRST APP
> lets create your first repository and push it to github

## Create React App
>We will use create-react-app to generate our first app
1. Open a terminal
2. Create a `projects` directory: 
    ```
    mkdir projects
    ```
3. Navigate to `projects` directory: 
    ```
    cd projects
    ```
4. Create a react app called `code-playground`:
    ```
    npx create-react-app code-playground
    ```
5. Navigate to `code-playground` and start the project:
    ```
    cd code-playground
    npm start
    ```
#### Congratulations! you have your first app up and running 🎉


## Create a github repository
1. [Create a new repository on Github](https://github.com/new)
2. Name it `code-playground`
3. Leave all other options blank
4. Click on create repository

## Push an existing app to Github
1. Open a terminal
2. Navigate to `code-playground` directory:
   ```
   cd projects/code-playground
    ```
3. Run these 3 commands, one at a time. Make sure to update `[YOUR-USERNAME]` with your github username:
   ```
   git remote add origin https://github.com/[YOUR-USERNAME]/code-playground.git
   git branch -M master
   git push -u origin master
   ```


## Code Format with ESLint & Prettier
>Make sure you get the most of your IDE.
Check out the guides on how to customise yours.
- [customise Visual Studio Code](./CUSTOMISE_VSCODE.md)
- [customise Web Storm](./CUSTOMISE_WEBSTORM.md)
