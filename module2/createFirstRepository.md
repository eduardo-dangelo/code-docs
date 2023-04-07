[The Complete Front-End Web Development Crash Course](../README.md) / [Module 2: Getting Started](./README.md)

# 👨‍🎨 Create First GitHub Repository

> We will be using GitHub to store our code. GitHub is a website that allows us to store our code in the cloud. It also allows us to collaborate with other developers.


### Create a github repository
1. [Create a new repository on Github](https://github.com/new)
2. Name it `code-playground`:
   
   <img src="../imgs/repository_name.png" alt="repository_name" width="200"/>
3. Leave all other options blank
4. Click on create repository:

   <img src="../imgs/create_repository.png" alt="repository_name" width="200"/>

### Push an existing app to Github
1. Open a terminal
2. Navigate to `code-playground` directory:
   ```
   cd projects/code-playground
    ```
3. Run these 3 commands, one at a time, and make sure to update `[YOUR-USERNAME]` with your github username:
   ```
   git remote add origin https://github.com/[YOUR-USERNAME]/code-playground.git
   git branch -M master
   git push -u origin master
   ```
> **Congratulations! Now you have your first repository in gitHub 🎉**. 
> If you refresh your github page, you should see your repository there.

## NEXT
[🛠 Code Format (ESLint & Prettier)](./CODE_FORMAT_WITH_ESLINT_&_PRETTIER.md)