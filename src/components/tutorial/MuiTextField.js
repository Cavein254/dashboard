import { Stack, TextField } from '@mui/material';
import React from 'react';
const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={10}>
        <TextField label="username" />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
