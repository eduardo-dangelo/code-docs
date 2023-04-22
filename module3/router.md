[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# Router
> In this section we will learn how to navigate between pages in our application.
> We will use the `react-router-dom` package to create a router for our application.

## 1. Install react-router-dom
1. Open the terminal.
2. Navigate to the `code-playground` folder.
3. Install the `react-router-dom` package.
    ```bash
    npm install react-router-dom
    ```

## 2. Update the App component
1. Open the `App.jsx` file.
2. Import the `BrowserRouter` component from the `react-router-dom` package.
    ```js
    import {
      BrowserRouter as Router,
      Routes,
      Route,
    } from 'react-router-dom';
    ```
3. Create the `siteData` array, add the `TodoList` item and place it above the `App` function.
   ```js
   const siteData = [
     {
       name: 'Todo List',
       route: '/todo-list',
       element: <TodoList />,
       icon: FormatListBulletedIcon,
     },
   ];
   ```
   > The `siteData` array will hold the data for the pages in our application.
   > Each item in the array will represent a page in our application.
   > We will add more items to the array later on.
4. Don't forget to import the `FormatListBulletedIcon` component.
   ```js
   import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
   ```
5. Wrap the `App` function with the `Router` component and map the `siteData` array to `Route` components.
   ```js
   function App() {
     return (
       <Router>
         <PageLayout siteData={siteData}>
           <Routes>
             {siteData.map((item) => {
               return (
                 <Route
                   key={item.route}
                   path={item.route}
                   element={item.element}
                 />
                );
             })}
           </Routes>
         </PageLayout>
       </Router>
     );
   }
   ```
   > Notice we're passing the `siteData` array to the `PageLayout` component.
   > We will use the `siteData` array to create the navigation menu in the `SideBar` component.

## 3. Update the SideBar component
1. Open the `PageLayout.jsx` file.
2. Declare `siteData` as a prop.
   ```js
   const PageLayout = ({ children, siteData }) => {
   ```
3. Pass the `siteData` prop to the `SideBar` component.
   ```js
   <SideBar siteData={siteData} />
   ```
4. Open the `SideBar.jsx` file.
5. Declare `siteData` as a prop.
   ```js
   const SideBar = ({ siteData }) => {
   ```
6. Import the `useNavigate` component from the `react-router-dom` package.
   ```js
   import { useNavigate } from 'react-router-dom';
   ```
7. Declare the `navigate` variable and initialize it with the `useNavigate` component.
   ```js
    const navigate = useNavigate();
    ```
8. Create a `handleClick` function that will navigate to the selected page.
   ```js
   const handleClick = (route) => {
     navigate(route);
   };
   ```
9. Update `List` content with a map of the `siteData`
   ```js
   <List>
     {siteData.map((item, key) => {
       const Icon = item.icon;
       const selected = item.route === window.location.pathname;
       return (
         <ListItemButton
           key={key}
           sx={{ px: 3 }}
           onClick={() => handleItemClick(item.route)}
           selected={selected}
         >
           <Icon 
             color={selected ? 'secondary' : 'primary'}
             fontSize='small'
             sx={{ mr: 2 }}
           />
           <ListItemText primary={item.name} />
         </ListItemButton>
       );
     })}
   </List>
   ```
   > If you check the application now you will see that the navigation menu is working.
   > When you click on `Todo List` you will see the `TodoList` component
   > and the page url will change to `http://localhost:3000/todo-list`.

## 4. Add a Home page
> Let's add a home page to our application.
> The home page will be the default page that will be displayed when the application loads.

1. Create a new file named `HomePage.jsx` in the `components` folder.
2. Open the `HomePage.jsx` file.
3. Import packages:
   ```js
   import React from 'react';
   import { Box } from '@mui/material';
   ```
4. Create the `HomePage` component:
   ```js
    const HomePage = () => {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          Home Page
        </Box>
      );
    };
    ```
5. Open the `App.jsx` file.
6. Import the `HomePage` component.
   ```js
   import HomePage from './components/HomePage';
   ```
7. Add the `HomePage` to a `Route` above the `siteData` map and pass the `siteData` array as a prop.
   ```js
   <Routes>
     <Route
      path='/'
      element={<HomePage siteData={siteData} />}
     />
    {siteData.map((item) => {...})}
   </Routes>
   ```
   
8. Open the `HomePage.jsx` file.
9. Import packages:
   ```js
   import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
   import { Box, Card, Typography } from '@mui/material';
   import { useNavigate } from 'react-router-dom';
   ```
10. Declare the `navigate` variable and initialize it with the `useNavigate` component.
   ```js
    const navigate = useNavigate();
 ```
11. Create a `handleClick` function that will navigate to the selected page.
   ```js
   const handleClick = (route) => {
     navigate(route);
   };
   ```
12. Map `siteData` to `Card` components.
   ```js
   <Box
     sx={{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
     }}
   >
     {siteData.map((item, key) => {
       const Icon = item.icon;
       return (
         <Card
           key={key}
           variant='outlined'
           sx={{
             p: 2,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             cursor: 'pointer',
           }}
           onClick={() => handleClick(item.route)}
         >
           <Icon sx={{ fontSize: 100 }} />
           <Typography variant='h5'>{item.name}</Typography>
         </Card>
       );
     })}
   </Box>
   ```
13. Add `Code Playground` logo above the `siteData` array:
   ```js
   <Box 
     sx={{
       display: 'flex',
       alignItems: 'center',
       mb: 2,
    }}
   >
     <LocalFireDepartmentIcon
       fontSize='large'
       color='secondary'
       sx={{ mr: 2 }}
     />
     <Typography variant='h5'>CODE PLAYGROUND</Typography>
   </Box>
   ```
   > If you check the application now you will see that the home page is working.
   > When you click on `Todo List` you will see the `TodoList` component
   > and the page url will change to `http://localhost:3000/todo-list`.

## 5. Make the SideBar logo clickable
> Let's make the `Code Playground` logo clickable and navigate to the home page.

1. Open the `SideBar.jsx` file.
2. Wrap the `Logo` elements with a `ListItemButton`: 
   ```js
   <ListItemButton 
     sx={{ p: 3 }}
     onClick={() => handleItemClick('/')}
   >
      <LocalFireDepartmentIcon color='secondary' sx={{ mr: 2 }} />
      <Typography>CODE PLAYGROUND</Typography>
   </ListItemButton>
   ```
   
> Well done! You have completed the first part of the tutorial.
> If you check the application now you will see that the navigation menu is working.
> Next, we will create our next project `Theme Switcher` and add it to the navigation menu.

## Next
[Theme Switcher](../theme-switcher/README.md)