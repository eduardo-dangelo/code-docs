[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# <img src="../imgs/react-icon.png" width="30"/> Theme Switcher
> In this section we will learn how to add a theme switcher to our application.
> We will use the `ThemeProvider` component from the `@material-ui/core` package to create a theme for our application.

## 1. Add Theme Switcher route
> Let's start by adding a route for the theme switcher page.

1. Open the `App.jsx` file.
2. Add the `ThemeSwitcher` item to the `siteData` array.
   ```js
   {
     name: 'Theme Switcher',
     route: '/theme-switcher',
     element:  <div>Theme Switcher</div>,
     icon: DarkModeIcon,
   }
   ```
3. Import the `DarkModeIcon` component.
   ```js
   import DarkModeIcon from '@material-ui/icons/DarkMode';
   ```
   
## 2. Fix Home Page grid
> Let's quickly fix the home page list by wrapping the list with a `Grid` component.

1. Open the `HomePage.jsx` file.
2. Import the `Grid` component from the `@material-ui/core` package.
   ```js
   import { ..., Grid } from '@mui/material';
   ```
3. Wrap the `List` component with the `Grid` component.
   ```js
    <Grid container columns={4} spacing={2}>
      {siteData.map((item, key) => {
        const Icon = item.icon;
        return (
          <Grid item key={key}>
           <Card
             variant='outlined'
             sx={{
               p: 2,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               cursor: 'pointer',
             }}
             onClick={() => handleItemClick(item.route)}
           >
             <Icon color='primary' sx={{ mb: 1 }} />
             <Typography>{item.name}</Typography>
           </Card>
         </Grid>
       );
     })}
   </Grid>
    ```
   
## 3. Create Theme Switcher page
> Let's create the theme switcher page.

1. Create a new file called `ThemeSwitcher.jsx` in the `components` folder.
2. Open the `ThemeSwitcher.jsx` file.
3. Import packages.
   ```js
   import React, { useState } from 'react';
   import { Stack, Switch, Typography, useTheme } from '@mui/material';
   import LightModeIcon from '@mui/icons-material/LightMode';
   import DarkModeIcon from '@mui/icons-material/DarkMode';
   ```
4. Create the `ThemeSwitcher` component.
   ```js
   const ThemeSwitcher = ({ onSwitchTheme, theme }) => {
     const [checked, setChecked] = useState(!!(theme === 'dark'));
     
     const onChange = () => {
       setChecked(!checked);
       onSwitchTheme(!checked ? 'dark' : 'light');
     };
   
     return (
       <>
         <Typography
          variant='h4'
          sx={{ textAlign: 'center', my: 3, color: 'text.primary' }}
         >
           Theme Switcher
         </Typography>
         <Stack
          direction='row'
          spacing={1}
          alignItems='center'
          justifyContent='center'
         >
           <LightModeIcon
             fontSize='large'
             color={checked ? 'primary' : 'secondary'}
           />
           <Switch
             checked={checked}
             onChange={onChange}
             inputProps={{ 'aria-label': 'ant design' }}
             size='large'
             color='secondary'
           />
           <DarkModeIcon
             fontSize='large'
             color={checked ? 'secondary' : 'primary'}
           />
         </Stack>
      </>
     );
   };
   ```
5. Export the `ThemeSwitcher` component.
   ```js
    export default ThemeSwitcher;
    ```
 
## 4. Add Theme Switcher to the App
> Let's add the `ThemeSwitcher` component to the `App` component.

1. Open the `App.jsx` file.
2. Import the `ThemeProvider` and `createTheme` component from the `@material-ui/core` package.
   ```js
   import { ..., ThemeProvider, createTheme } from '@mui/material';
   ```
3. Import the `ThemeSwitcher` component.
   ```js
    import ThemeSwitcher from './components/ThemeSwitcher';
    ```
4. Create the `theme` objects.
    ```js
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        background: {
          default: '#121212',
          paper: '#181818',
        },
      },
    });
   
   const lightTheme = createTheme({
      palette: {
        mode: 'light',
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
      },
    });
    ```
   
5. Add Theme Switcher state.
   ```js
   const [theme, setTheme] = useState('ligth');
   ```
6. Update Theme switcher route with the `ThemeSwitcher` component.
   ```js
   {
     name: 'Theme Switcher',
     route: '/theme-switcher',
     element: (
       <ThemeSwitcher onSwitchTheme={setTheme} theme={theme} />
     ),
     icon: DarkModeIcon,
   }
   ```
   
7. Wrap the `App` component with the `ThemeProvider` component.
   ```js
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Router>
        ...
      </Router>
    </ThemeProvider>
    ```
   
> Now you can switch between the light and dark theme.

## 5. Fix Places where the theme is not applied
> Let's fix the places where the theme is not applied.

1. Open the `PageLayout.jsx` file.
2. replace `backgroundColor: '#f5f5f5'` with `bgcolor: 'background.default',` in the `sx` prop of the `Box` component.
   ```js
   <Box
     sx={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'space-around',
       flex: 1,
       bgcolor: 'background.default',
     }}
   >
   ```
   
3. Open the `SideBar.jsx` file.
4. Add property `color='text.primary'` to the `Typography` components.
   ```js
     <Typography color='text.primary'>CODE PLAYGROUND</Typography>
   ````
   ```js
     <ListItemButton
       ...
       color='text.primary'
      >
   ````
    ```js
     <ListItemText
       ...
       sx={{ color: 'text.primary' }}
     />
   ```
   
5. Open the `TodoList.tsx` file.
6. Add property `color='text.primary'` to the `Typography` components.
   ```js
    <Typography
      variant='h4'
      sx={{ textAlign: 'center', my: 3, color: 'text.primary' }}
    >
      Todo List
    </Typography>
   ````
   
7. Open the `TodoListItem.tsx` file.
8. Update `ListItemText` color.
   ```js
   <ListItemText
     primary={item}
     sx={{
       textDecoration: checked ? 'line-through' : 'none',
       color: 'text.primary',
     }}
   />
   ```
   
> Now the theme is applied to all the places.

## NEXT
> For the next section, we will be learning about redux and its implementation in react.

[<img src="../imgs/redux-icon.jpeg" width="15"/> Redux](./redux.md)