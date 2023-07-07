import { Box, Button, Stack, Typography } from '@mui/material';
import { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(state.counter);
      return { counter: state.counter + 1 };
    case 'MINUS':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
const Tuts = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const add = (e) => {
    dispatch({ type: 'ADD' });
  };
  const minus = (e) => {
    dispatch({ type: 'MINUS' });
  };
  return (
    <Box
      height="250px"
      p={4}
      xs={{
        backgroundColor: 'black',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        width="250px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <Stack display="flex" flexDirection="row">
          <Button variant="contained" color="secondary" onClick={add}>
            Add{' '}
          </Button>
          <Button variant="outlined" color="secondary" onClick={minus}>
            Subtract{' '}
          </Button>
        </Stack>
        <Stack>
          <Typography variant="h1" color="secondary">
            Counter : {state.counter}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Tuts;
