[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# Redux
> Notice when you switch between the pages, the state of the todo list is not preserved.
> In this section we will learn how to use Redux to manage the state of our application.
> We will use the `redux` and `react-redux` packages to create a store and connect our components to it.

## 1. Install Packages
> First, we need to install the packages we will use.
> Run the following command in the terminal:
```bash
npm install redux react-redux @reduxjs/toolkit
```

## 2. Configure Store
> Now we will create a store to manage the state of our application.

1. Create a new file called `store.js` in the `src` folder.
2. Add the following code to the file:
    ```js
    import { configureStore } from '@reduxjs/toolkit';
    import todoListReducer from './features/todoList/todoListSlice';
    
    export default configureStore({
      reducer: {
        todoList: todoListReducer,
      },
    });
    ```
3. Open the `index.js` file in the `src` folder.
4. Import the `Provider` component from `react-redux`:
    ```js
    import { Provider } from 'react-redux';
    ```
5. Import the `store` from the `store.js` file:
    ```js
    import store from './store';
    ```
4. Wrap the `App` component with the `Provider` component from `react-redux`:
    ```js
    <Provider store={store}>
      <App />
    </Provider>
    ```

## 3. Create a Todo List Reducer
1. Create a new folder called `features` and inside it create a new folder called `todoList`.
2. Create a new file called `todoListSlice.js` inside a `src/features/todoList` folder.
3. Add the following code to the file:
    ```js
    import { createSlice } from '@reduxjs/toolkit';
    
    export const todoListSlice = createSlice({
      name: 'todoList',
      initialState: {
        value: [
          { text: 'Learn React', completed: false },
          { text: 'Learn Material UI', completed: false },
          { text: 'Build a todo list application', completed: false },
        ],
      },
      reducers: {
        addItem: (state, action) => {
          state.value.push(action.payload);
        },
        removeItem: (state, action) => {
          state.value.splice(action.payload, 1);
        },
        toggleMarkComplete: (state, action) => {
          state.value[action.payload].completed =
            !state.value[action.payload].completed;
        },
      },
    });
    
    export const { addItem, removeItem, toggleMarkComplete } =
      todoListSlice.actions;
    
    export default todoListSlice.reducer;
    ```

## 4. Connect the Todo List Component to the Store
1. Open the `TodoList.js` file in the `src/components` folder.
2. Import the `useSelector` and `useDispatch` hooks from `react-redux`:
    ```js
    import { useSelector, useDispatch } from 'react-redux';
    ```
3. Import the `addItem` and `removeItem` actions from the `todoListSlice.js` file:
    ```js
    import {
      addItem,
      removeItem,
    } from '../features/todoList/todoListSlice';
    ```
4. Replace the `TodoList` component with the following code:
    ```js
    const TodoList = () => {
      const todoList = useSelector((state) => state.todoList.value);
      const dispatch = useDispatch();
    
      const handleAddItem = (item) => {
        dispatch(addItem(item));
      };
    
      const handleDelete = (index) => {
        dispatch(removeItem(index));
      };
    
      return (
        <>
          <Typography
            variant='h4'
            sx={{ textAlign: 'center', my: 3, color: 'text.primary' }}
          >
            Todo List
          </Typography>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              margin: 'auto',
              border: '1px solid #ccc',
              borderRadius: 1,
            }}
          >
            <ListItem>
              <CreateItem onAddItem={handleAddItem} />
            </ListItem>
            {todoList.map((item, index) => (
              <TodoListItem
                key={index}
                item={item}
                index={index}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </List>
        </>
      );
    };
    ```
5. Remove the import of the `{ useState }` hook from `react`:
6. Open the `TodoListItem.js` file in the `src/components` folder.
7. Import `useDispatch` and `toggleMarkComplete` action from the `todoListSlice.js` file:
    ```js
    import { useDispatch } from 'react-redux';
    import { toggleMarkComplete } from '../features/todoList/todoListSlice';
    ```
8. Replace the `TodoListItem` component with the following code:
    ```js
    const TodoListItem = ({ item, onDelete, index }) => {
      const dispatch = useDispatch();
      return (
        <ListItem
          secondaryAction={
            <IconButton edge='end' onClick={onDelete}>
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton
            onClick={() => dispatch(toggleMarkComplete(index))}
          >
            <ListItemIcon>
              <Checkbox edge='start' checked={item.completed} />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                textDecoration: item.completed ? 'line-through' : 'none',
                color: 'text.primary',
              }}
            />
          </ListItemButton>
        </ListItem>
      );
    };
    ```
> Now you can test the application and see that the state of the todo list is preserved when you switch between the pages.

## NEXT
> Next we will be adding a typescript support to our application.

[Go to module 4](../module4/README.md)