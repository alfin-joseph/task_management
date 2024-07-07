import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IconButton, Typography } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
export function MainTiles(){
    return(
        <Box sx={{ flexGrow: 1, padding: 2, marginLeft: 2 , display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2} sx={{ justifyContent: 'center'}} columns={{ xs: 4, sm: 8, md: 16 }}>
          <Grid item xs={3} sx={{ textAlign: 'left', bgcolor: '#B3E0FF', borderRadius: 4, p: 2, mr:2 ,marginBottom:2 }}>
            <IconButton sx={{ bgcolor: '#DE54F0' , marginBottom:2 }}>
              <SignalCellularAltOutlinedIcon sx={{color:"white"}}/>
            </IconButton>
            <Typography sx={{color:"gray"}}>
                Total revenue 
            </Typography>
            <Typography variant='h5'>
              $53,00989
            </Typography>
            <Typography sx={{fontSize:"0.7em"}}>
              <ArrowOutwardOutlinedIcon  sx={{fontSize:"1em" ,color:"green"}}/> 12% increase from last month 
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'left', bgcolor: '#B3E0FF', borderRadius: 4, p: 2 , mr:2 ,marginBottom:2 }}>
            <IconButton sx={{ bgcolor: '#B34D00', marginBottom:2  }}>
             < BusinessCenterOutlinedIcon sx={{color:"white"}}/>
            </IconButton>
            <Typography sx={{color:"gray"}}>
               Projects 
            </Typography>
            <Typography variant='h5'>
              95/100
            </Typography>
            <Typography sx={{fontSize:"0.7em"}}>
              <CallReceivedOutlinedIcon  sx={{fontSize:"1em" ,color:"red"}}/> 10% decrease from last month
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'left', bgcolor: '#B3E0FF', borderRadius: 4, p: 2  ,mr:2 , marginBottom:2 }}>
            <IconButton sx={{ bgcolor: '#67C4F0', marginBottom:2  }}>
             <AccessTimeOutlinedIcon sx={{color:"white"}}/>
            </IconButton>
            <Typography sx={{color:"gray"}}>
                Time spend 
            </Typography>
            <Typography variant='h5'>
              1022 /1300Hrs
            </Typography>
            <Typography sx={{fontSize:"0.7em"}}>
            <ArrowOutwardOutlinedIcon  sx={{fontSize:"1em" ,color:"green"}}/>8% increase from last month 
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'left', bgcolor: '#B3E0FF', borderRadius: 4, p: 2 , mr:2 , marginBottom:2 }}>
            <IconButton sx={{ bgcolor: '#F0CD0A', marginBottom:2  }}>
              <PersonOutlinedIcon sx={{color:"white"}}/>
            </IconButton>
            <Typography sx={{color:"gray"}}>
                Resource 
            </Typography>
            <Typography variant='h5'>
              101 /120
            </Typography>
            <Typography sx={{fontSize:"0.7em"}}>
            <ArrowOutwardOutlinedIcon sx={{fontSize:"1em" ,color:"green"}}/>2% increase from last month
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
}