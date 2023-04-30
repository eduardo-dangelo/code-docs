import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: [
      { text: 'Learn React', completed: false },
      { text: 'Learn Material UI', completed: false },
      { text: 'Build a todo list application', completed: false },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    toggleMarkComplete: (state, action) => {
      state.value[action.payload].completed =
        !state.value[action.payload].completed;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, toggleMarkComplete } =
  todoListSlice.actions;

export default todoListSlice.reducer;
