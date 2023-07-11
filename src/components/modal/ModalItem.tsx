import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ModalItem = () => {
  return (
    <Box>
      <Box>
        <img src="" />
      </Box>
      <Box>
        <Box>
          <Typography variant="h4">Do you want a</Typography>
          <Typography variant="h1">$20 CREDIT</Typography>
          <Typography variant="h4">for your first trade?</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="primary">
            YES, I love NTF's
          </Button>
          <Button variant="contained" color="secondary">
            NO, Thanks
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ModalItem;
