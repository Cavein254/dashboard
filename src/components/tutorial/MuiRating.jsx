import { Rating, Stack } from '@mui/material';
import React, { useState } from 'react';

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={4}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
      />
    </Stack>
  );
};

export default MuiRating;
