import { Box, Stack } from '@mui/material';
import React from 'react';

const MuiStack = () => {
  return (
    <Stack sx={{ border: '2px solid' }}>
      <Box height="120px" width="120px" sx={{ backgroundColor: 'red' }}>
        box
      </Box>
    </Stack>
  );
};

export default MuiStack;
