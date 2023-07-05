import { Button } from '@mui/material';
import React from 'react';

const MuiButton = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default MuiButton;
