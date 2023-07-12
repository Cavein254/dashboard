import { Box } from '@mui/material';
import React from 'react';
import PlayerHeader from './PlayerHeader';
import PlayerSideBar from './PlayerSideBar';

const Player = () => {
  return (
    <Box>
      <PlayerSideBar />
      <PlayerHeader />
    </Box>
  );
};

export default Player;
