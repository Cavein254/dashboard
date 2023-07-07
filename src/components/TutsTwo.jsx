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
import { useState } from 'react';

const TutsTwo = () => {
  const [task, setTask] = useState('');
  const handleClick = (e) => {};
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
        <Box display="flex" flexDirection="row" width="full">
          <Box width="50%">
            <Stack gap={2}>
              <TextField
                label="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Button variant="contained" onClick={handleClick}>
                Add
              </Button>
            </Stack>
          </Box>
          <Box width="50%">
            <List>
              <ListItem>
                <ListItemText primary="Item one" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default TutsTwo;
