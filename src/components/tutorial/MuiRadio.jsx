import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';

const MuiRadio = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log({ value });
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience">Years of Experience</FormLabel>
        <RadioGroup
          id="job-experience"
          aria-labelledby="job-experience"
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label="0-12" value="0-12" />
          <FormControlLabel control={<Radio />} label="3-12" value="3-12" />
          <FormControlLabel control={<Radio />} label="10-12" value="10-12" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
