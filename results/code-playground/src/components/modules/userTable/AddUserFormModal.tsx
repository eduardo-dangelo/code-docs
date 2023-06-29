import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { UserTableType } from '../../../types';

type ComponentProps = {
  open: boolean;
  handleClose: () => void;
  onSubmit: (values: UserTableType) => void;
};

type errorType = {
  [key: string]: string | boolean;
};

const initialState = {
  firstName: '',
  lastName: '',
  age: null,
  email: '',
};
const AddUserFormModal: React.FC<ComponentProps> = ({
  open,
  handleClose,
  onSubmit,
}) => {
  const [error, setError] = React.useState<errorType>({
    firstName: false,
    lastName: false,
    age: false,
    email: false,
  });

  const [values, setValues] =
    React.useState<UserTableType>(initialState);

  const handleSubmit = () => {
    if (
      values.firstName &&
      values.lastName &&
      values.age &&
      values.email
    ) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(values.email)) {
        setError({ ...error, email: 'Must be a valid email' });
        return;
      }

      onSubmit(values);
      setValues(initialState);
    } else {
      setError({
        firstName: !values.firstName && 'Field is required',
        lastName: !values.lastName && 'Field is required',
        age: !values.age && 'Field is required',
        email: !values.email && 'Field is required',
      });
    }
  };

  const setFieldValue = (field: string, value: string | number) => {
    error[field] && setError({ ...error, [field]: false });
    setValues({ ...values, [field]: value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          label='First Name'
          size='small'
          fullWidth
          sx={{ my: 1 }}
          value={values.firstName}
          onChange={(e) => {
            setFieldValue('firstName', e.target.value);
          }}
          helperText={error.firstName}
          error={!!error.firstName}
        />
        <TextField
          label='Last Name'
          size='small'
          fullWidth
          sx={{ my: 1 }}
          value={values.lastName}
          onChange={(e) => {
            setFieldValue('lastName', e.target.value);
          }}
          helperText={error.lastName}
          error={!!error.lastName}
        />
        <TextField
          label='Age'
          size='small'
          fullWidth
          type='number'
          sx={{ my: 1 }}
          value={values.age}
          onChange={(e) => {
            setFieldValue('age', e.target.value);
          }}
          helperText={error.age}
          error={!!error.age}
        />
        <TextField
          label='Email'
          size='small'
          fullWidth
          sx={{ mt: 1 }}
          value={values.email}
          onChange={(e) => {
            setFieldValue('email', e.target.value);
          }}
          helperText={error.email}
          error={!!error.email}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          variant='contained'
          color='info'
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button variant='contained' onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserFormModal;
