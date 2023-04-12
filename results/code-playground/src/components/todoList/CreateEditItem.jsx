import React, { useState } from 'react';

const CreateEditItem = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onAdd(value);
    setValue('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='input-box'>
      <input
        type='text'
        onChange={handleInputChange}
        onKeyDown={onKeyPress}
        value={value}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default CreateEditItem;
