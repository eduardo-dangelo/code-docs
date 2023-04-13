import React, { useState } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/Delete';

const TodoListItem = ({ item, onDelete }) => {
  const [checked, setChecked] = useState(false);
  return (
    <ListItem
      secondaryAction={
        <IconButton edge='end' onClick={onDelete}>
          <DeleteForeverIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => setChecked(!checked)} dense>
        <ListItemIcon>
          <Checkbox edge='start' checked={checked} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText
          id={item}
          primary={item}
          sx={{ textDecoration: checked ? 'line-through' : 'none' }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
