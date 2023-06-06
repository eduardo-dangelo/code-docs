import React from 'react';
import TodoListItem from './TodoListItem';
import CreateItem from './CreateItem';
import { List, ListItem, Typography } from '@mui/material';
import {
  addItem,
  removeItem,
} from '../../../redux/todoList/todoListSlice';
import { TodoListItemType, TodoListType } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const TodoList = () => {
  const todoList: TodoListType = useAppSelector(
    (state) => state.todoList.value,
  );
  const dispatch = useAppDispatch();

  const handleAddItem = (item: TodoListItemType) => {
    dispatch(addItem(item));
  };

  const handleDelete = (index: number) => {
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
            onDelete={handleDelete}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
