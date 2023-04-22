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

const siteData = [
  {
    name: 'Todo List',
    route: '/todo-list',
    element: <TodoList />,
    icon: FormatListBulletedIcon,
  },
];

function App() {
  return (
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
  );
}

export default App;
