import React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Box, Card, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ siteData }) => {
  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <LocalFireDepartmentIcon
          fontSize='large'
          color='secondary'
          sx={{ mr: 2 }}
        />
        <Typography variant='h5'>CODE PLAYGROUND</Typography>
      </Box>
      <Grid container columns={4} spacing={2}>
        {siteData.map((item, key) => {
          const Icon = item.icon;
          return (
            <Grid item key={key}>
              <Card
                variant='outlined'
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => handleItemClick(item.route)}
              >
                <Icon color='primary' sx={{ mb: 1 }} />
                <Typography>{item.name}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
