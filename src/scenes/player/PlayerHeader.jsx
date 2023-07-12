import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';

const PlayerHeader = () => {
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

  const columns = [
    { field: 'title', flex: 1, headerName: 'Title' },
    { field: 'podcast', flex: 1, headerName: 'Channel' },
    { field: 'releaseDate', flex: 1, headerName: 'Date' },
    { field: 'duration', flex: 1, headerName: 'Duration' },
  ];
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
      <Box
        height="75vh"
        sx={{
          '& .MuiDataGrid-cell': {
            borderBottom: '0px solid transparent',
          },
          '& .MuiDataGrid-cellContent': {
            fontSize: '1.3em',
            color: 'white',
          },
          '& .MuiDataGrid-row': {
            backgroundColor: 'gray',
            padding: '4px',
            borderRadius: '8px',
            margin: '8px 4px',
          },
          '& .MuiDataGrid-virtualScrollerRenderZone': {
            backgroundColor: 'lime',
          },
          '& .MuiButtonBase-root': {
            color: '#fff',
            backgroundColor: 'red',
          },
        }}
      >
        <DataGrid
          rows={mockDataMusic}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PlayerHeader;
