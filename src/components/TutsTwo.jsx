import { CatchingPokemon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { useReducer, useState } from 'react';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    default:
      return state;
  }
};

const userTask = [];

const TutsTwo = () => {
  const [inVal, setInval] = useState({ content: '' });
  const [state, dispatch] = useReducer(taskReducer, userTask);
  const handleChange = (e) => {
    setInval({ ...inVal, content: e.target.value });
  };
  const handleClick = (newTask) => {
    const uTask = {
      id: Date.now(),
      task: newTask,
    };
    dispatch({ type: 'ADD_TASK', payload: uTask });
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEMONAPP
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: '10px', margin: '32px' }} elevation={4}>
        <Box display="flex" flexDirection="column" width="full">
          <Box width="50%">
            <Stack gap={2}>
              <TextField
                label="Enter Task"
                value={inVal.content}
                onChange={handleChange}
              />
              <Button variant="contained" onClick={() => handleClick(inVal)}>
                Add
              </Button>
            </Stack>
          </Box>
          <Box width="80%">
            <List
              sx={{
                backgroundColor: 'pink',
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid gray',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY: 'scroll',
                height: '120px',
              }}
            >
              {state.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.task.content}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '3rem',
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default TutsTwo;
