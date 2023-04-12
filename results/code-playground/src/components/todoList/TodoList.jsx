import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import CreateEditItem from './CreateEditItem';
import './style.css';

const initialList = ['item 1', 'item 2', 'item 3'];

const TodoList = () => {
  const [list, setList] = useState(initialList);

  const onAdd = (item) => {
    setList([...list, item]);
  };

  return (
    <div className='todo-list'>
      <div className='header'>
        <CreateEditItem onAdd={onAdd} />
      </div>
      {list.map((item, index) => (
        <TodoListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
