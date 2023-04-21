import React from 'react';
import {
  Box,
  List,
  ListItemText,
  Divider,
  Typography,
  ListItemButton,
} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LoginIcon from '@mui/icons-material/Login';

const SideBar = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          my: 3,
          px: 3,
        }}
      >
        <LocalFireDepartmentIcon color='secondary' sx={{ mr: 2 }} />
        <Typography>CODE PLAYGROUND</Typography>
      </Box>
      <Divider />
      <List>
        <ListItemButton sx={{ px: 3 }} selected>
          <FormatListBulletedIcon
            color='secondary'
            fontSize='small'
            sx={{ mr: 2 }}
          />
          <ListItemText primary='Todo List' />
        </ListItemButton>
        <ListItemButton sx={{ px: 3 }}>
          <DarkModeIcon
            color='primary'
            fontSize='small'
            sx={{ mr: 2 }}
          />
          <ListItemText primary='Theme' />
        </ListItemButton>
        <ListItemButton sx={{ px: 3 }}>
          <LoginIcon
            color='primary'
            fontSize='small'
            sx={{ mr: 2 }}
          />
          <ListItemText primary='Form' />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default SideBar;
