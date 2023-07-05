import SendIcon from '@mui/icons-material/Send';
import { Button, Stack } from '@mui/material';
import React from 'react';

const MuiButton = () => {
  return (
    <Stack spacing={8}>
      <Stack spacing={4} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<SendIcon />}
          endIcon={<SendIcon />}
        >
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="large" color="success">
          Large
        </Button>
        <Button variant="contained" size="medium" color="info">
          Medium
        </Button>
        <Button variant="contained" size="small" color="warning">
          Small
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
