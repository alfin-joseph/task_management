import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskTabs from './TaskTableComponent';
import BubbleChart from './BubbleChart';


export default function TaskDetails() {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 16 }} sx={{justifyContent:"center"}}>
      <Grid item xs={4} sm={8} md={8} sx={{ textAlign: 'left', borderRadius: 3, p: 2 }}>
        <TaskTabs/>
      </Grid>
      <Grid item xs={4} sm={4} md={5} alignItems = "flex-end" sx={{ textAlign: 'left', borderRadius: 3, p: 2 , }}>
        <BubbleChart/>
      </Grid>
    </Grid>
  </Box>
  );
}
