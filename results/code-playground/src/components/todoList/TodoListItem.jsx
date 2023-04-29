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
      <ListItemButton onClick={() => setChecked(!checked)}>
        <ListItemIcon>
          <Checkbox edge='start' checked={checked} />
        </ListItemIcon>
        <ListItemText
          id={item}
          primary={item}
          sx={{
            textDecoration: checked ? 'line-through' : 'none',
            color: 'text.primary',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
