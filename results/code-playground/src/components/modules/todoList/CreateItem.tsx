import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TodoListItemType } from '../../../types';

type CreateItemProps = {
  onAddItem: (item: TodoListItemType) => void;
};
const CreateItem: React.FC<CreateItemProps> = ({ onAddItem }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (value) {
      onAddItem({ text: value, completed: false });
      setValue('');
    } else {
      setError('Field is required');
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
