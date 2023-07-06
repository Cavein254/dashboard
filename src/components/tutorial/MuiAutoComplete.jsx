import { AutoComplete, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const skills = ['HTML', 'CSS', 'javascript', 'typescript', 'react'];

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  return (
    <Stack spacing={4} width="250px">
      <AutoComplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;
