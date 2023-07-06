import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

const MuiCheckBox = () => {
  return (
    <Box>
      <FormControlLabel label="I accept the terms and conditions">
        <Checkbox />
      </FormControlLabel>
    </Box>
  );
};

export default MuiCheckBox;
