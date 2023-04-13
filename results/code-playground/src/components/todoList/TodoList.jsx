import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import CreateEditItem from './CreateEditItem';
import { Card, List, ListItem, Typography } from '@mui/material';

const initialList = ['item 1', 'item 2', 'item 3'];

const TodoList = () => {
  const [list, setList] = useState(initialList);

  const onAdd = (item) => {
    setList([...list, item]);
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center', my: 3 }}>
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
          <CreateEditItem onAdd={onAdd} />
        </ListItem>
        {list.map((item, index) => (
          <TodoListItem key={index} item={item} onDelete={() => handleDelete(index)} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
