import * as React from 'react';
import TodoList from './components/modules/todoList/TodoList';
import PageLayout from './components/layout/PageLayout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomePage from './components/modules/HomePage';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeSwitcher from './components/modules/ThemeSwitcher';
import { useAppSelector } from './redux/hooks';
import { SiteDataType } from './types';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import UserTable from './components/modules/userTable/UserTable';

function App() {
  const theme = useAppSelector((state) => state.theme.value);

  const siteData: SiteDataType[] = [
    {
      name: 'Todo List',
      route: '/todo-list',
      element: <TodoList />,
      icon: FormatListBulletedIcon,
    },
    {
      name: 'Theme Switcher',
      route: '/theme-switcher',
      element: <ThemeSwitcher />,
      icon: DarkModeIcon,
    },
    {
      name: 'User Table',
      route: '/user-table',
      element: <UserTable />,
      icon: GroupAddIcon,
    },
  ];

  const themeConfig = createTheme({
    palette: theme,
  });

  return (
    <ThemeProvider theme={themeConfig}>
      <Router>
        <PageLayout siteData={siteData}>
          <Routes>
            <Route
              path='/'
              element={<HomePage siteData={siteData} />}
            />
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
    </ThemeProvider>
  );
}

export default App;
