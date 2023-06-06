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
import { toggleMarkComplete } from '../../../redux/todoList/todoListSlice';
import { TodoListItemType } from '../../../types';

type TodoListItemProps = {
  item: TodoListItemType;
  onDelete: (index: number) => void;
  index: number;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  item,
  onDelete,
  index,
}) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      secondaryAction={
        <IconButton edge='end' onClick={() => onDelete(index)}>
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
