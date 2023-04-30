import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toggleMarkComplete } from '../../features/todoList/todoListSlice';

const TodoListItem = ({ item, onDelete, index }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      secondaryAction={
        <IconButton edge='end' onClick={onDelete}>
          <DeleteForeverIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        onClick={() => dispatch(toggleMarkComplete(index))}
      >
        <ListItemIcon>
          <Checkbox edge='start' checked={item.completed} />
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{
            textDecoration: item.completed ? 'line-through' : 'none',
            color: 'text.primary',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
