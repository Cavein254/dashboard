import { Box, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const MuiSelection = () => {
  const [country, setCountry] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setCountry(typeof value === 'string' ? value.split(',') : value);
  };
  console.log({ country });
  return (
    <Box width="250px" height="500px" color="primary">
      <TextField
        label="Select home country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        helperText="This is a crazy country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="KE">Kenya</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelection;
