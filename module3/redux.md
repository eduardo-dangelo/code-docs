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

1. Create a folder called `redux` in the `src` folder.
2. Create a new file called `store.ts` in the `redux` folder.
2. Add the following code to the file:
    ```js
    import { configureStore } from '@reduxjs/toolkit';
    import todoListReducer from './features/todoList/todoListSlice';
    
    export const store = configureStore({
      reducer: {
        todoList: todoListReducer,
      },
    });
    ```
3. Open the `index.ts` file in the `src` folder.
4. Import the `Provider` component from `react-redux`:
    ```js
    import { Provider } from 'react-redux';
    ```
5. Import the `store` from the `store.ts` file:
    ```js
    import { store } from './redux/store';
    ```
4. Wrap the `App` component with the `Provider` component from `react-redux`:
    ```js
    <Provider store={store}>
      <App />
    </Provider>
    ```

## 3. Create a Todo List Reducer
1. Create a new folder called `todoList` inside the `redux` folder.
2. Create a new file called `todoListSlice.ts` inside the `todoList` folder.
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
3. Import the `addItem` and `removeItem` actions from the `todoListSlice.ts` file:
    ```js
    import {
      addItem,
      removeItem,
    } from '../../../redux/todoList/todoListSlice';
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
6. Open the `TodoListItem.js` file in the `src/components/modules` folder.
7. Import `useDispatch` and `toggleMarkComplete` action from the `todoListSlice.ts` file:
    ```js
    import { useDispatch } from 'react-redux';
    import { toggleMarkComplete } from '../redux/todoList/todoListSlice';
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

## 5. Configure a store for the Theme Switcher
> Now we will create a store for the theme switcher.

1. Create a new folder called `theme` inside the `redux` folder.
2. Create a new file called `themeSlice.js` inside the `theme` folder.
3. Open the `themeSlice.js` file and add the following code:
    ```js
    import { createSlice } from '@reduxjs/toolkit';
    
   const darkThemePallet = {
     mode: 'dark',
     background: {
       default: '#121212',
       paper: '#181818',
     },
   };
   
   const lightThemePallet = {
     mode: 'light',
     background: {
       default: '#f5f5f5',
       paper: '#ffffff',
     },
   };
      
    export const themeSlice = createSlice({
      name: 'theme',
      initialState: {
        value: lightThemePallet,
      },
      reducers: {
        toggleTheme: (state) => {
          state.value =
             state.value.mode === 'dark'
               ? lightThemePallet
               : darkThemePallet;
        },
      },
    });
    
    export const { toggleTheme } = themeSlice.actions;
    
    export default themeSlice.reducer;
    ```
4. Open the `store.ts` file in the `redux` folder.
5. Import the `themeSlice` reducer:
    ```js
    import themeReducer from './theme/themeSlice';
    ```
6. Add the `themeReducer` to the `combineReducers` function:
    ```js
    export const store = configureStore({
      reducer: {
        todoList: todoListReducer,
        theme: themeReducer,
      },
    });
    ```
   
## 6. Connect the Theme Switcher Component to the Store
1. Open the `ThemeSwitcher.js` file in the `src/components/modules` folder.
2. Import the `useSelector` and `useDispatch` hooks from `react-redux`:
    ```js
    import { useSelector, useDispatch } from 'react-redux';
    ```
3. Import the `toggleTheme` action from the `themeSlice.ts` file:
    ```js
    import { toggleTheme } from '../../redux/theme/themeSlice';
    ```
4. Remove the props from the `ThemeSwitcher` component:
    ```js
    const ThemeSwitcher = () => {...}
    ```
5. Declare `theme` and `dispatch` variables using the `useSelector` and `useDispatch` hooks:
    ```js
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    ```
6. Update the `checked` useState hook to use the `theme` variable:
    ```js
      const checked = !!(theme.mode === 'dark');
    ```
   > Don't forget to remove the `useState` import from `react`.
7. Update the `onChange` function to dispatch the `toggleTheme` action:
    ```js
    const onChange = () => {
      dispatch(toggleTheme());
    };
    ```
   
## 7. Update the App Component
1. Open the `App.js` file in the `src` folder.
2. Import the `useSelector` hook from `react-redux`:
    ```js
    import { useSelector } from 'react-redux';
    ```
3. Declare a `theme` variable using the `useSelector` hook:
    ```js
    const theme = useSelector((state) => state.theme.value);
    ```
4. Remove the `darkTheme` and `lightTheme` variables.
5. Create a `themeConfig` variable that will hold the theme configuration:
    ```js
    const themeConfig = createTheme({
      palette: theme,
    });
    ```
6. Update the `ThemeProvider` component to use the `themeConfig` variable:
    ```js
    <ThemeProvider theme={themeConfig}>
    ```

## NEXT
> Next we will be learning about Typescript.

[<img src="../imgs/typescript-icon.jpeg" width="15"/> Introdution to Typescript](./introdutionToTypescript.md)