[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# <img src="../imgs/typescript-icon.jpeg" width="30"/> Convert Project Files To Typescript
> In this section we will convert our project files to Typescript.

### Create a `types.ts` File
1. Create a new file called `types.ts` in the `src` folder.
2. Add the following code to the file:
   ```ts
   import { OverridableComponent } from '@mui/types';
   import { SvgIconTypeMap } from '@mui/material';
   
   export type SiteDataType = {
     name: string;
     route: string;
     element: JSX.Element;
     icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
   };
   
   export type TodoListItemType = {
     text: string;
     completed: boolean;
   };
   
   export type TodoListType = TodoListItemType[];
   ```

### Add types to `useSelector` and `useDispatch` Hooks
1. Create a file called `hooks.ts` in the `redux` folder.
2. Open `hooks.ts` and add the following:
   ```ts
   import {
     TypedUseSelectorHook,
     useDispatch,
     useSelector,
   } from 'react-redux';
   import type { RootState, AppDispatch } from './store';
   
   type DispatchFunc = () => AppDispatch;
   export const useAppDispatch: DispatchFunc = useDispatch;
   export const useAppSelector: TypedUseSelectorHook<RootState> =
     useSelector;
   ```
   
## 3. Update the `App.tsx` File
1. Rename the `App.js` file in the `src` folder to `App.tsx`.
2. Open the `App.tsx`
3. Import the `SiteDataType` type from the `types.ts` file:
   ```js
   import { SiteDataType } from './types';
   ```
4. Update the `siteData` variable to use the `SiteDataType` type:
   ```js
   const siteData: SiteDataType[] = [
      ...
   ];
   ```
5. Update the `useSelector` hooks to use the `useAppSelector` hook:
   ```ts
   import { useAppSelector } from './redux/hooks';
   ```
   ```ts
   const theme = useAppSelector((state) => state.theme.value);
   ```
   
## 5. Update the `TodoList` Components
1. Rename the `TodoList.js`, `TodoListItem.js` and `CreateItem.js` file in the `src/modules/components` folder to `TodoList.tsx`, `TodoListItem.tsx`,  `CreateItem.tsx`.
2. Open the `TodoList.tsx` file and import the ...:
   ```ts
   import { TodoListItemType, TodoListType } from '../../../types';
   import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
   ```
3. Update the variables `todoList` and `dispatch` to use `useAppDispatch` and `useAppSelector`:
   ```ts
   const todoList: TodoListType = useAppSelector(
     (state) => state.todoList.value,
   );
   const dispatch = useAppDispatch();
   ```
4. Open the `TodoListItem.tsx` component and import `TodoListItemType` type:
   ```ts
   import { TodoListItemType } from '../../../types';
   ```
5. Create a type for the `props` called `TodoListItemProps`:
   ```ts
   type TodoListItemProps = {
      item: TodoListItemType;
      onDelete: (index: number) => void;
      index: number;
   };
   ```
6. Update the `props` to use the `TodoListItemProps` type:
   ```ts
    const TodoListItem: React.FC<TodoListItemProps> = ({
    ```
   
7. Open the `CreateItem.tsx`
8. Import the `TodoListType` type, create a component type and add it to the main component:
   ```ts
   import { TodoListItemType } from '../../../types';

   type CreateItemProps = {
      onAddItem: (item: TodoListItemType) => void;
   };
   
   const CreateItem: React.FC<CreateItemProps> = ({ onAddItem }) => {
   ```
9. For the `handleInputChange`, add the type `ChangeEvent`:
   ```ts
   const handleInputChange = (
     e: React.ChangeEvent<HTMLInputElement>,
   ) => {
   ```
10. For the `onKeyPress`, add the type `KeyboardEvent`:
    ```ts
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    ```
    
## 6. Update the `ThemeSwitcher` Component
1. Open the `ThemeSwitcher.tsx` component and import the `useAppDispatch` and `useAppSelector` hooks:
   ```ts
   import { useAppDispatch, useAppSelector } from '../../redux/hooks';
   import { toggleTheme } from '../../redux/theme/themeSlice';
   ```
2. Update the `theme` variable to use the `useAppSelector` hook:
   ```ts
   const theme = useAppSelector((state) => state.theme.value);
   const dispatch = useAppDispatch();
    ```

## 7. Update the `HomePage` Component
1. Open the `HomePage.tsx` component and import the `SiteDataType` hook:
   ```ts
   import { SiteDataType } from '../../types';
   ```
2. Create a type for the `props` called `HomePageProps`:
   ```ts
   type HomePageProps = {
     siteData: SiteDataType[];
   };
   ```
3. Update the `props` to use the `HomePageProps` type:
   ```ts
   const HomePage: React.FC<HomePageProps> = ({ siteData }) => {
   ```
4. Update the `handleClick` function to use the `SiteDataType` type:
   ```ts
   const handleItemClick = (route: SiteDataType['route']) => {
      navigate(route);
   };
   ```


## 8. Update the `layout` Components
1. Rename the `PageLayout.js` and `SideBar.js` file in the `src/modules/layout` folder to `PageLayout.tsx` and `SideBar.tsx`.
2. Open the `PageLayout.tsx` component and import the `SiteDataType` type:
   ```ts
   import { SiteDataType } from '../../types';
   ```
3. Create a type for the `props` called `PageLayoutProps`:
   ```ts
    type PageLayoutProps = {
      siteData: SiteDataType[];
    };
    ```
4. Update the `props` to use the `PageLayoutProps` type:
    ```ts
    const PageLayout: React.FC<PageLayoutProps> = ({ siteData }) => {
    ```
5. Open the `SideBar.tsx` component and import the `SiteDataType` type:
    ```ts
    import { SiteDataType } from '../../types';
    ```
6. Create a type for the `props` called `SideBarProps`:
    ```ts
    type SideBarProps = {
      siteData: SiteDataType[];
    };
    ```
7. Update the `props` to use the `SideBarProps` type:
    ```ts
    const SiteLayout: React.FC<SideBarProps> = ({ siteData }) => {
    ```
   
