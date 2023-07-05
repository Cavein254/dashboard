import { Typography } from '@mui/material';
import React from 'react';

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 variant</Typography>
      <Typography variant="h2">h2 variant</Typography>
      <Typography variant="h3">h3 variant</Typography>
      <Typography variant="h4">h4 variant</Typography>
      <Typography variant="h5" gutterBottom>
        h5 variant
      </Typography>
      <Typography variant="h6" component="h1">
        h6 variant
      </Typography>

      <Typography variant="subtittle1">sub title one</Typography>
      <Typography variant="subtittle2">sub title two</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ex tempora
        voluptatem voluptate maiores, aliquid laboriosam blanditiis quia aliquam
        nam distinctio, magni quasi architecto, eaque corporis illum consectetur
        quibusdam recusandae?
      </Typography>

      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ex tempora
        voluptatem voluptate maiores, aliquid laboriosam blanditiis quia aliquam
        nam distinctio, magni quasi architecto, eaque corporis illum consectetur
        quibusdam recusandae?
      </Typography>
    </div>
  );
};

export default MuiTypography;
