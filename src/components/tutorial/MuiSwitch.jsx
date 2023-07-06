import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} />}
        helpText="Add dark mode"
        color="success"
        size="Large"
        error
      />
    </Box>
  );
};

export default MuiSwitch;
