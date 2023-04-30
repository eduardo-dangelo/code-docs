import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateItem = ({ onAddItem }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (value) {
      onAddItem({ text: value, complete: false });
      setValue('');
    } else {
      setError('Field is required');
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <TextField
      fullWidth
      size='small'
      label='Add new item'
      value={value}
      onChange={handleInputChange}
      onKeyDown={onKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              color='primary'
              onClick={handleSubmit}
            >
              <AddCircleIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      error={!!error}
      helperText={error}
    />
  );
};

export default CreateItem;
