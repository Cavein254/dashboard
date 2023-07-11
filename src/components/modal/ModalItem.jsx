import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import House from '../../img/3.jpg';

const ModalItem = ({ open, setOpen }) => {
  console.log(open);
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={2}
      backgroundColor="black"
      height="100vh"
      position="relative"
      zIndex="30"
    >
      <Box>
        <img src={House} aria-label="Intresting picture" height="300px" />
      </Box>
      <Box>
        <Stack>
          <Button
            variant="text"
            sx={{
              fontSize: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              top: 0,
              right: 0,
              border: '1px solid black',
            }}
            onClick={() => setOpen(!open)}
          >
            X
          </Button>
        </Stack>
        <Box>
          <Stack>
            <Typography variant="h4">Do you want a</Typography>
          </Stack>
          <Stack>
            <Typography variant="h1">$20 CREDIT</Typography>
          </Stack>
          <Stack>
            <Typography variant="h4">for your first trade?</Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
