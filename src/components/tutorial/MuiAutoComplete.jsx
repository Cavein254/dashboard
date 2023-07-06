import { Autocomplete, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const skills = ['HTML', 'CSS', 'javascript', 'typescript', 'react'];
const skillsOptions = skills.map((skill, index) => ({
  id: index,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  return (
    <Stack spacing={4} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        skill={skill}
        onChange={(e, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
