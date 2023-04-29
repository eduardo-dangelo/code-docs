import React, { useState } from 'react';
import { Stack, Switch, Typography, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitcher = ({ onSwitchTheme, theme }) => {
  const [checked, setChecked] = useState(!!(theme === 'dark'));
  const onChange = () => {
    setChecked(!checked);
    onSwitchTheme(!checked ? 'dark' : 'light');
  };

  return (
    <>
      <Typography
        variant='h4'
        sx={{ textAlign: 'center', my: 3, color: 'text.primary' }}
      >
        Theme Switcher
      </Typography>
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent='center'
      >
        <LightModeIcon
          fontSize='large'
          color={checked ? 'primary' : 'secondary'}
        />
        <Switch
          checked={checked}
          onChange={onChange}
          inputProps={{ 'aria-label': 'ant design' }}
          size='large'
          color='secondary'
        />
        <DarkModeIcon
          fontSize='large'
          color={checked ? 'secondary' : 'primary'}
        />
      </Stack>
    </>
  );
};

export default ThemeSwitcher;
