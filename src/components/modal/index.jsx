import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ModalItem from './ModalItem';

const Modal = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Button variant="contained" size="large" onClick={() => setOpen(!open)}>
        Modal
      </Button>
      {open && <ModalItem open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default Modal;
