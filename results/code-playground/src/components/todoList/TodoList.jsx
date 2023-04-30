import React from 'react';
import TodoListItem from './TodoListItem';
import CreateItem from './CreateItem';
import { List, ListItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
} from '../../features/todoList/todoListSlice';

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

export default TodoList;
