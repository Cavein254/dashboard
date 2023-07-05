import { InputAdornment, Stack, TextField } from '@mui/material';
import React from 'react';
const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack orientation="vertical" spacing={10}>
        <TextField label="username" variant="outlined" />
        <TextField label="username" variant="filled" />
        <TextField label="username" variant="outlined" />

        <TextField
          label="username"
          variant="standard"
          size="small"
          color="secondary"
        />

        <TextField
          variant="outlined"
          label="password"
          helperText="Don not share your password"
          type="password"
        />
      </Stack>
      <Stack direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          In
          putProps={{
            endAdornment: <InputAdornment position="end">Kgs</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
