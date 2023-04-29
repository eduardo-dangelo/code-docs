import React from 'react';
import TodoList from './components/todoList/TodoList';
import PageLayout from './components/pageLayout/PageLayout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomePage from './components/HomePage';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeSwitcher from './components/ThemeSwitcher';

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

function App() {
  const [theme, setTheme] = React.useState('light');

  const siteData = [
    {
      name: 'Todo List',
      route: '/todo-list',
      element: <TodoList />,
      icon: FormatListBulletedIcon,
    },
    {
      name: 'Theme Switcher',
      route: '/theme-switcher',
      element: (
        <ThemeSwitcher onSwitchTheme={setTheme} theme={theme} />
      ),
      icon: DarkModeIcon,
    },
  ];

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
