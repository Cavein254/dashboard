import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 };
    case 'DEC':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

const Tuts = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increase = () => {
    return dispatch({ type: 'INC' });
  };
  const decrease = () => {
    return dispatch({ type: 'DEC' });
  };
  return (
    <Box
      height="100px"
      width="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Stack gap={2} width="140px">
        <Button variant="contained" color="primary" onClick={increase}>
          INCREMENT
        </Button>
        <Button variant="contained" color="secondary" onClick={decrease}>
          DECREMENT
        </Button>
      </Stack>
      <Stack>
        <Typography variant="h1" color="secondary">
          Counter : {state.count}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Tuts;
