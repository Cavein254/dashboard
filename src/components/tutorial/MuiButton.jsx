import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';
import {
  Button,
  ButtonGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useState } from 'react';

const MuiButton = () => {
  const [formats, setFormats] = useState([]);
  const formatChange = (e, updatedFormats) => {
    e.preventDefault();
    console.log(updatedFormats);
  };
  return (
    <Stack spacing={8}>
      <Stack spacing={4} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<SendIcon />}
          endIcon={<SendIcon />}
        >
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="large" color="success">
          Large
        </Button>
        <Button variant="contained" size="medium" color="info">
          Medium
        </Button>
        <Button variant="contained" size="small" color="warning">
          Small
        </Button>
      </Stack>
      <Stack>
        <iconButton aria-label="send" color="success" size="large">
          <SendIcon />
        </iconButton>
        <iconButton
          aria-label="send"
          color="success"
          size="large"
          disableElevation
        >
          <SendIcon onClick={() => alert('You clicked me')} />
        </iconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="large"
          aria-label="alignment button group"
        >
          <Button color="warning">Left</Button>
          <Button color="warning">Center</Button>
          <Button color="warning">Right</Button>
          <Button color="primary">Top</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text Formating"
          value={formats}
          onChange={formatChange}
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
