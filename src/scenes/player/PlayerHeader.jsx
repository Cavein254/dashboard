import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const PlayerHeader = () => {
  const columns = [{ field: 'music', flex: 1 }];
  return (
    <Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: '#fff',
          }}
        >
          Playlist
        </Typography>
      </Box>
      <Box>
        <DataGrid />
      </Box>
    </Box>
  );
};

export default PlayerHeader;

const mockDataMusic = [
  {
    id: 1,
    title: 'Look on to me and be saved',
    duration: '26 min',
    releaseDate: 'May 17, 2023',
    podcast: 'SearchLight with Jon Courson',
  },
  {
    id: 2,
    title: 'Quiet quitting and loud layoffs',
    duration: '29 min',
    releaseDate: 'May 10, 2023',
    podcast: 'The Stack Overflow Podcast',
  },
  {
    id: 3,
    title: 'How a top-ranked engineering school reimagined CS curriculum',
    duration: '24 min',
    releaseDate: 'April 28, 2023',
    podcast: 'SearchLight with Jon Courson',
  },
];
