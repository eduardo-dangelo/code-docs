[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# Todo List
> In this section we will build a todo list application.
> In this application we will be able to add, remove and edit items in the list.

## Create folder & files
> We will start by creating a new folder for our project.
> At this point you should already have a repository called `code-playground` in your `projects` folder. 
> If you don't have it, please follow the instructions in the previous sections: 
> - [Introduction to React](../module2/introductionToReact.md)
> - [Create first repository](../module2/createFirstRepository.md)

1. Open `code-playground` folder in your IDE.
2. Inside the folder `src` create a new folder called `components`.
3. Inside the folder `components` create a folder called `todoList`.
4. Inside the folder `todoList` create 4 new files:
    - `TodoList.jsx`
    - `TodoListItem.jsx`
    - `CreateEditItem.jsx`
    - `style.css`

## Create TodoList component
> We will start by adding the `TodoList` component into our `App.js` file.

1. Open `TodoList.jsx` file and add the following code:
    ```jsx
    import React from 'react';
    import './style.css';
    
    const TodoList = () => {
      return (
        <div>
          <h1>Todo List</h1>
        </div>
      );
    };
    
    export default TodoList;
    ```
    > The code above is just a simple component that will render a `h1` tag with the text `Todo List`.
    > We will add more code to this component later on.


2. Open `App.js` file
3. Remove the code inside the `App` component.
3. and import the `TodoList` component:

> Your `App.js` file should look like this:
```jsx
import React from 'react';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App
```

5. You can delete the `App.css` and `logo.svg` files.
6. Run the application using `npm start` command. You should see a page with the text `Todo List` in the browser.

## Render a list of items
> Let's add some code to our recently created files.

### TodoList.jsx
1. Open `TodoList.jsx` file.
2. Let's start by adding a `useState` hook to our component. We will use this hook to store the list of items in our todo list.
    ```jsx
    import React, { useState } from 'react';
    import './style.css';

    const initialList = ['item 1', 'item 2', 'item 3']
   
    const TodoList = () => {
      const [list, setList] = useState(initialList);
    
      return (
        <div>
          <h1>Todo List</h1>
        </div>
      );
    };
    
    export default TodoList;
    ```
    > You can read more about `useState` hook [here](https://react.dev/reference/react/useState).

3. Let's add a `map` function to our `list` variable. This will loop through the list and render a `TodoListItem` component for each item in the list.
    ```jsx
    import React, { useState } from 'react';
    import './style.css';
    import TodoListItem from './TodoListItem';
   
    const initialList = ['item 1', 'item 2', 'item 3']
   
    const TodoList = () => {
      const [list, setList] = useState(initialList);
    
      return (
        <div className="todo-list">
          {list.map((item, index) => (
            <TodoListItem key={index} item={item} />
          ))}
        </div>
      );
    };
   
   export default TodoList;
   ```
### TodoListItem.jsx
1. Open `TodoListItem.jsx` file.
2. Let's start by adding the `item` prop to our component and displaying it inside the component.
    ```jsx
    import React, { useState } from 'react';
   
    const TodoListItem = ({ item }) => {
      return (
        <div className='todo-item'>
          {item}
        </div>
      );
    };
    
    export default TodoListItem;
    ```

### style.css
1. Open style.css file and add the following code:
    ```css
    .todo-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    
    .todo-item {
      width: 100%;
      height: 50px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ```
    > We will add more styles later on. If you check the browser on `http://localhost:3000/` now, you should see a list of items.

## Add a new item to the list

1. Let's add a `CreateEditItem` component to our `TodoList` component. This component will be used to add new items to the list.
    ```jsx
    import React, { useState } from 'react';
    import './style.css';
    import TodoListItem from './TodoListItem';
    import CreateEditItem from './CreateEditItem';
   
    const initialList = ['item 1', 'item 2', 'item 3']
   
    const TodoList = () => {
      const [list, setList] = useState(initialList);
    
      return (
        <div className="todo-list">
          <div className="header">
            <CreateEditItem />
          </div>
          {list.map((item, index) => (
            <TodoListItem key={index} item={item} />
          ))}
        </div>
      );
    };
   
    export default TodoList;
   ```

### CreateEditItem.jsx
1. Open `CreateEditItem.jsx` file.
2. Let's start by adding a `useState` hook to our component. We will use this hook to store the value of the input field.
    ```jsx
    import React, { useState } from 'react';
   
    const CreateEditItem = () => {
      const [value, setValue] = useState('');
    
      return (
        <div>
          <input type="text" />
        </div>
      );
    };
    
    export default CreateEditItem;
    ```
3. Let's add a `onChange` event to our input field. This event will be triggered every time the value of the input field changes.
    ```jsx
    import React, { useState } from 'react';
   
    const CreateEditItem = () => {
      const [value, setValue] = useState('');
    
      return (
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
    };
   
    export default CreateEditItem;
   ```
   
4. Let's add a `onClick` event to our button. 
    ```jsx
    import React, { useState } from 'react';
   
    const CreateEditItem = ({ onAdd }) => {
      const [value, setValue] = useState('');
   
      const handleSubmit = () => {
        onAdd(value)
        setValue('')
      }
    
      return (
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      );
    };
   
    export default CreateEditItem;
   ```
   
5. Let's also add o onKeyPress event to our input field. So we can add items to the list by pressing the enter key.
    ```jsx
    import React, { useState } from 'react';
   
    const CreateEditItem = ({ onCreate }) => {
      const [value, setValue] = useState('');
   
      const handleSubmit = () => {
        onAdd(value)
        setValue('')
      }
    
      return (
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit()
              }
            }}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      );
    };
   
    export default CreateEditItem;
   ```
   
6. Now let's organise our code a bit. Let's create a `handleInputChange` function and move the code inside the `onChange` event to this function.
    ```jsx
    import React, { useState } from 'react';
   
    const CreateEditItem = ({ onAdd }) => {
      const [value, setValue] = useState('');
   
      const handleInputChange = (e) => {
        setValue(e.target.value)
      }
   
      const handleSubmit = () => {
        onAdd(value)
        setValue('')
      }
   
      const onKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSubmit()
        }
      }
    
      return (
        <div>
          <input
            type='text'
            onChange={handleInputChange}
            onKeyDown={onKeyDown}
            value={value}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      );
    };
   
    export default CreateEditItem;
   ```
### style.css   
1. Now open style.css file and add the following code:
    ```css
    .header {
      width: 100%;
      height: 50px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
   
    input {
      width: 50%;
      height: 100%;
      border: 1px solid black;
    }
   
    button {
      width: 50px;
      height: 100%;
      border: 1px solid black;
    }
    ```
### TodoList.jsx
1. Now let's add the `onAdd` function to our `TodoList` component.
    ```jsx
    import React, { useState } from 'react';
    import TodoListItem from './TodoListItem';
    import CreateEditItem from './CreateEditItem';
   
    const initialList = ['item 1', 'item 2', 'item 3']
   
    const TodoList = () => {
      const [list, setList] = useState(initialList);
    
      const onAdd = (item) => {
        setList([...list, item])
      }
    
      return (
        <div className="todo-list">
          <div className="header">
            <CreateEditItem onAdd={onAdd} />
          </div>
          {list.map((item, index) => (
            <TodoListItem key={index} item={item} />
          ))}
        </div>
      );
    };
   
    export default TodoList;
   ```
   > If you check the browser now, you should be able to add new items to the list.

## Delete an item from the list
### TodoListItem.jsx
1. Let's add a `onDelete` function to our `TodoListItem` component.
    ```jsx
    import React from 'react';
   
    const TodoListItem = ({ item, onDelete }) => {
      return (
        <div className="todo-item">
          <div>{item}</div>
          <button
            className='delete-button'
            onClick={() => onDelete(item)}
          >
            🗑
          </button>
        </div>
      );
    };
    
    export default TodoListItem;
   ```
### TodoList.jsx
1. Let's add the `onDelete` function to our `TodoList` component.
    ```jsx
    import React, { useState } from 'react';
    import TodoListItem from './TodoListItem';
    import CreateEditItem from './CreateEditItem';
   
    const initialList = ['item 1', 'item 2', 'item 3']
   
    const TodoList = () => {
      const [list, setList] = useState(initialList);
    
      const onAdd = (item) => {
        setList([...list, item])
      }
    
      const onDelete = (item) => {
        setList(list.filter((i) => i !== item))
      }
    
      return (
        <div className="todo-list">
          <div className="header">
            <CreateEditItem onAdd={onAdd} />
          </div>
          {list.map((item, index) => (
            <TodoListItem
              key={index}
              item={item}
              onDelete={onDelete}
            />
          ))}
        </div>
      );
    };
   ```
   
### style.css
1. Let's add some styles to our delete button.
    ```css
    .delete-button {
      width: 50px;
      height: 100%;
      border: 1px solid black;
      background-color: red;
    }
    ```
   > If you check the browser now, you should be able to delete items from the list.

## Edit an item from the list
### TodoListItem.jsx
1. Let's add a `onEdit` function to our `TodoListItem` component.
    ```jsx
    import React from 'react';
   
    const TodoListItem = ({ item, onDelete, onEdit }) => {
      return (
        <div className="todo-item">
          <div>{item}</div>
          <button
            className='delete-button'
            onClick={() => onDelete(item)}
          >
            ??
          </button>
          <button
            className='edit-button'
            onClick={() => onEdit(item)}
          >
            Edit
          </button>
        </div>
      );
    };
    
    export default TodoListItem;
   ```
### TodoList.jsx
1. Let's add the `onEdit` function to our `TodoList` component.
    ```jsx
    import React, { useState } from 'react';
    import TodoListItem from './TodoListItem';
    import CreateEditItem from './CreateEditItem';
   
    const initialList = ['item 1', 'item 2', 'item 3']
   
    const TodoList = () => {
      const [list, setList] = useState(initialList);
    
      const onAdd = (item) => {
        setList([...list, item])
      }
    
      const onDelete = (item) => {
        setList(list.filter((i) => i !== item))
      }
    
      const onEdit = (item) => {
        const newList = list.map((i) => {
          if (i === item) {
            return 'edited item'
          }
          return i
        })
        setList(newList)
      }
    
      return (
        <div className="todo-list">
          <div className="header">
            <CreateEditItem onAdd={onAdd} />
          </div>
          {list.map((item, index) => (
            <TodoListItem
              key={index}
              item={item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      );
    };
   ```