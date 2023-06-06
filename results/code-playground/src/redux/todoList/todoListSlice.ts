import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoListItemType } from '../../types';

interface TodoListState {
  value: TodoListItemType[];
}

// Define the initial state using that type
const initialState: TodoListState = {
  value: [
    { text: 'Learn React', completed: false },
    { text: 'Learn Material UI', completed: false },
    { text: 'Build a todo list application', completed: false },
  ],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TodoListItemType>) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
    toggleMarkComplete: (state, action: PayloadAction<number>) => {
      state.value[action.payload].completed =
        !state.value[action.payload].completed;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, toggleMarkComplete } =
  todoListSlice.actions;

export default todoListSlice.reducer;
