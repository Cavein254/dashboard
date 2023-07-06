import { Rating, Stack } from '@mui/material';
import React, { useState } from 'react';

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={4}>
      <Rating value={value} onChange={handleChange} />
    </Stack>
  );
};

export default MuiRating;
