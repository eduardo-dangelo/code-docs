import { UserTableListType, UserTableType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserTableState = {
  value: UserTableListType;
};

const initialState: UserTableState = {
  value: [
    {
      lastName: 'Snow',
      firstName: 'Jon',
      age: 35,
      email: 'jon.snow@got.com',
    },
    {
      lastName: 'Lannister',
      firstName: 'Cersei',
      age: 42,
      email: 'cersei.lannister@got.com',
    },
    {
      lastName: 'Lannister',
      firstName: 'Jaime',
      age: 45,
      email: 'jaime.lannister@got.com',
    },
    {
      lastName: 'Stark',
      firstName: 'Arya',
      age: 16,
      email: 'arya.stark@got.com',
    },
  ],
};

export const userTableSlice = createSlice({
  name: 'userTable',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserTableType>) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addUser, removeUser } = userTableSlice.actions;

export default userTableSlice.reducer;
