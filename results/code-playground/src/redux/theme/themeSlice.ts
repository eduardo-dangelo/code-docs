import { createSlice } from '@reduxjs/toolkit';
import { PaletteOptions } from '@mui/material';

interface ThemeSwitcherState {
  value: Partial<PaletteOptions>;
}

const darkThemePallet: Partial<PaletteOptions> = {
  mode: 'dark',
  background: {
    default: '#121212',
    paper: '#181818',
  },
};

const lightThemePallet: Partial<PaletteOptions> = {
  mode: 'light',
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
};

// Define the initial state using that type
const initialState: ThemeSwitcherState = {
  value: lightThemePallet,
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value =
        state.value.mode === 'dark'
          ? lightThemePallet
          : darkThemePallet;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = todoListSlice.actions;

export default todoListSlice.reducer;
