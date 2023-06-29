import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Table from './Table';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddUserFormModal from './AddUserFormModal';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  addUser,
  removeUser,
} from '../../../redux/userTable/userTableSlice';

const UserTable = () => {
  const userTable = useAppSelector((state) => state.userTable.value);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Typography
        variant='h4'
        sx={{ textAlign: 'center', my: 3, color: 'text.primary' }}
      >
        User Table
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 2,
        }}
      >
        <Button
          variant='contained'
          endIcon={<PersonAddIcon />}
          onClick={() => setOpen(true)}
        >
          Add User
        </Button>
      </Box>
      <Table
        data={userTable}
        columns={[
          { field: 'firstName', label: 'First name' },
          { field: 'lastName', label: 'Last name' },
          { field: 'age', label: 'Age' },
          { field: 'email', label: 'Email' },
          {
            field: '',
            label: '',
            renderCell: (index) => {
              return (
                <Box sx={{ width: 50 }}>
                  <IconButton
                    onClick={() => {
                      dispatch(removeUser(index));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              );
            },
          },
        ]}
      />
      <AddUserFormModal
        open={open}
        handleClose={() => setOpen(false)}
        onSubmit={(values) => {
          dispatch(addUser(values));
          setOpen(false);
        }}
      />
    </>
  );
};

export default UserTable;
