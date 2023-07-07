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

const TutsTwo = () => {
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
            <Stack>
              <TextField label="Enter Task" />
              <Button variant="contained">Add</Button>
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
