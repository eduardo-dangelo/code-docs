import React from 'react';
import { Stack, Switch, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleTheme } from '../../redux/theme/themeSlice';

const ThemeSwitcher = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const checked = (theme.mode === 'dark');

  const onChange = () => {
    dispatch(toggleTheme());
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
