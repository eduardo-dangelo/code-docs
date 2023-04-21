import React from 'react';
import { Box } from '@mui/material';
import SideBar from './SideBar';

const PageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <SideBar />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default PageLayout;