import { Box, Grid, List, ListItemButton, ListItemText, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SemiCircularProgressBar from "./HalfDonat";


 const ProgressMeter =() =>{
    return(<Box sx={{ bgcolor: '#B3E0FF' , height:"100%" , borderRadius:3}}> 
             <Box sx={{ display: 'flex', width: '100%'}}>
                <Box sx={{ flexGrow: 1 ,textAlign:"left", justifyContent:"flex-start" }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 ,margin:1}}>
                        Overall progress
                    </Typography>
                </Box>
                 <List
                     component="nav"
                     aria-label="Device settings"
                     sx={{ bgcolor: 'none', borderRadius: '8px', display: 'flex', justifyContent: 'flex-end' }} // Set border radius for the entire list
                    >
                    <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="Alex melon"
                    sx={{
                        borderRadius: '30px', // Set border radius for the list item
                        height: '40px', // Adjust the height of the list item
                        color: "black",
                        bgcolor: "white",
                        mr: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                    >
                    <ListItemText
                        primary="all"
                        sx={{ flex: 1 }} // Ensure text takes up available space
                        primaryTypographyProps={{ sx: { fontSize: '14px' } }} // Adjust font size for primary text
                        secondaryTypographyProps={{ sx: { fontSize: '12px' } }} // Adjust font size for secondary text
                    />
                    <ExpandMoreIcon /> {/* Add down arrow */}
                  </ListItemButton>
                </List>
            </Box>
            <Box sx={{flexDirection: 'column', justifyContent: 'flex-end'}}>
            <SemiCircularProgressBar value1={25} value2={35} value3={35} />
            <Grid container justifyContent="space-evenly" alignItems="center">
                <Grid item >
                    <Typography variant="h6" >
                        95
                    </Typography>
                    <Typography sx={{fontSize:"0.7em"}}>
                      Total Projects
                    </Typography>
                </Grid>
                <Grid item >
                   <Typography variant="h5" sx={{color:"#00BA09"}}>
                        25
                    </Typography>
                    <Typography sx={{fontSize:"0.7em"}}>
                      Completed
                    </Typography>
                </Grid>
                <Grid item >
                   <Typography variant="h5" sx={{color:"#E0F500"}}>
                        35
                    </Typography>
                    <Typography sx={{fontSize:"0.7em"}}>
                     Delayed
                    </Typography>
                </Grid>
                <Grid item >
                   <Typography variant="h5" sx={{color:"#F58516"}}>
                        35
                    </Typography>
                    <Typography sx={{fontSize:"0.7em"}}>
                      On going
                    </Typography>
                </Grid>
            </Grid>
            </Box>
        </Box>)
}

export default ProgressMeter;