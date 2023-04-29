import React from 'react';
import { Box } from '@mui/material';
import SideBar from './SideBar';

const PageLayout = ({ children, siteData }) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <SideBar siteData={siteData} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
          bgcolor: 'background.default',
        }}
      >
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default PageLayout;
