import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import CreateItem from './CreateItem';
import { List, ListItem, Typography } from '@mui/material';

const TodoList = () => {
  const [items, setItems] = useState([
    'Learn React',
    'Learn Material UI',
    'Build a todo list application',
  ]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (index) => {
    const newList = [...items];
    newList.splice(index, 1);
    setItems(newList);
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
        {items.map((item, index) => (
          <TodoListItem
            key={index}
            item={item}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
