import { Stack, TextField } from '@mui/material';
import React from 'react';
const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={10}>
        <TextField label="username" variant="outlined" />
        <TextField label="username" variant="filled" />
        <TextField label="username" variant="standard" />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
