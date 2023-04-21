import React from 'react';
import TodoList from './components/todoList/TodoList';
import PageLayout from './components/pageLayout/PageLayout';

function App() {
  return (
    <PageLayout>
      <TodoList />
    </PageLayout>
  );
}

export default App;
