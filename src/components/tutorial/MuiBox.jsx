import { Box } from '@mui/material';
import React from 'react';

const MuiBox = () => {
  return (
    <Box
      display="flex"
      component="span"
      sx={{
        backgroundColor: 'primary.main',
        color: 'pink',
        height: '140px',
        width: '150px',
        padding: '120px',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          bgcolor: 'primary.light',
        },
      }}
    >
      MuiBox
    </Box>
  );
};

export default MuiBox;
