[The Complete Front-End Web Development Crash Course](../README.md) / [Module 2: Getting Started](./README.md)

# <img src="../imgs/react-icon.png" width="30"/> Introduction to React
> React is a JavaScript library, created by Facebook, for building user interfaces.
> It can be used to create web or mobile applications.
> Check the official documentation [here](https://reactjs.org/).


### Example of React:
> React component are saved with the `.jsx` extension.
> For this example we have `App.jsx`.
```javascript
// We import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// We define a function called App that returns a JSX
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

// We render the App component to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
```
> `JSX` is a syntax extension to JavaScript.
 You can write HTML directly within JavaScript. This is the reason why React is called a JavaScript library for building user interfaces.
> `JSX` gets compiled into plain JavaScript objects called “React elements”.
> 
> 
> Notice `ReactDOM.render()` method.
> `DOM` is a virtual representation of the HTML in the browser.
It will render the App component to the `DOM` element with id `root`.

## React Components
> React components are the building blocks of React.
> This means that everything in a React application is a React component.

### Example of React Components:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// We define a function called Greetings that has a prop called name
const Greetings = ({ name }) => {
  return <h1>Hello {name}!</h1>;
};

// We can reuse the Greetings component with different props
const App = () => {
  return (
    <div>
      <Greetings name="John" />
      <Greetings name="Jane" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
```
> In the above example, the `Greetings` component is being reused twice by `App` component.
> The code above will render the following HTML:
> ```html
> <div>
>  <h1>Hello John!</h1>
>  <h1>Hello Jane!</h1>
> </div>
>```

## <img src="../imgs/react-icon.png" width="30"/> Getting Started with React

### Create React App
> Create React App is a tool to help you build React applications.
> It saves you from time-consuming setup and configuration.
> Check out the full documentation on how to create a react app [here](https://reactjs.org/docs/create-a-new-react-app.html).
1. Open a terminal and navigate to your `projects` directory:
    ```
    cd projects
    ```
   > If you don't have a `projects` directory, create one by running `mkdir projects`.
2. Create a react app called `code-playground`:
    ```
    npx create-react-app code-playground
    ```
3. Navigate to `code-playground` and start the project:
    ```
    cd code-playground
    npm start
    ```
   
> A new browser tab should open with the following URL: `http://localhost:3000/`.
> You should see the initial React app page! We will be adding more code to this app in the next modules.
> > To stop a project from running, press `Ctrl + C` in the terminal.
## NEXT
> Next, we will be creating our first GitHub repository and pushing our code to it.

[👨‍🎨 Create First GitHub Repository](./createFirstRepository.md)
