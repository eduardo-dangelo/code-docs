[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# SideBar & PageLayout
> In this section we will learn how to create a sidebar and a page layout.
> The sidebar will be used to navigate between projects we will build in this module.
> The page layout will be used to display the content of our application in a consistent way.

## 1. Create folder & files
> First, let's create the folder and files we will need for this section.
1. Create a folder named `pageLayout` inside the `components` folder.
2. Create 2 files inside the `pageLayout` folder:
    - `PageLayout.jsx`
    - `SideBar.jsx`

## 2. The PageLayout component
> The `PageLayout` component will be used to display the content of our application in a consistent way.
> It will make all content to be center aligned by default.
1. Open the `PageLayout.jsx` file.
2. Import the `React`, `Box` and the `SideBar` module.
   ```js
   import React from 'react';
   import { Box } from '@mui/material';
   import SideBar from './SideBar';
   ```
3. Create the `PageLayout` component.
   ```js
   const PageLayout = ({ children }) => {
     return (
       <Box sx={{ display: 'flex' }}>
         <SideBar />
         <Box
           sx={{ 
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'space-around',
             flex: 1,
            }}
         >
           <Box>{children}</Box>
         </Box>
      </Box>
     );
   };
   ```
4. Export the `PageLayout` component.
   ```js
    export default PageLayout;
    ```
5. Open the `App.jsx` file.
6. Import the `PageLayout` component.
   ```js
   import PageLayout from './components/pageLayout/PageLayout';
   ```
7. Wrap the `TodoList` component with the `PageLayout` component.
   ```js
   function App() {
     return (
       <PageLayout>
          <TodoList />
       </PageLayout>
     );
   }
   ````
   
## 3. The SideBar component
> The `SideBar` component will be used to navigate between projects we will build in this module.
> It will be displayed on the left side of the page.
> It will be hidden on small screens.
1. Open the `SideBar.jsx` file.
2. Import the `React`, `Box`, `List`, `ListItem`, `ListItemIcon`, `ListItemText` and `Divider` modules.
   ```js
   import React from 'react';
   import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
   ```
3. Create the `SideBar` component.
   ```js
    const SideBar = () => {
      return (
        <Box
          sx={{
            width: 250,
            height: '100vh',
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
      );
    };
    ```
4. Export the `SideBar` component.
    ```js
    export default SideBar;
    ```
