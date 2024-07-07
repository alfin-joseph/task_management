import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProjctTable from './ProjectTablecomponent';
import ProgressMeter from './PrograssMeter';

export default function ProjectsDetails() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 16 }} sx={{justifyContent:"center"}}>
      <Grid item xs={4} sm={8} md={8} sx={{ textAlign: 'left', borderRadius: 3, p: 2 ,padding:1 ,}}>
        <ProjctTable/>
      </Grid>
      <Grid item xs={4} sm={4} md={5} sx={{ textAlign: 'left', borderRadius: 3, p: 2  ,   }}>
        <ProgressMeter/>
      </Grid>
    </Grid>
  </Box>
  );
}
