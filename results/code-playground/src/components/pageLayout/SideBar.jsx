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
import { useNavigate } from 'react-router-dom';

const SideBar = ({ siteData }) => {
  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route);
  };

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
      <ListItemButton
        sx={{ p: 3 }}
        onClick={() => handleItemClick('/')}
      >
        <LocalFireDepartmentIcon color='secondary' sx={{ mr: 2 }} />
        <Typography color='text.primary'>CODE PLAYGROUND</Typography>
      </ListItemButton>
      <Divider />
      <List>
        {siteData.map((item, key) => {
          const Icon = item.icon;
          const selected = item.route === window.location.pathname;
          return (
            <ListItemButton
              key={key}
              sx={{ px: 3 }}
              onClick={() => handleItemClick(item.route)}
              selected={selected}
              color='text.primary'
            >
              <Icon
                color={selected ? 'secondary' : 'primary'}
                fontSize='small'
                sx={{ mr: 2 }}
              />
              <ListItemText
                primary={item.name}
                sx={{ color: 'text.primary' }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default SideBar;
