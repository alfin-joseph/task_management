import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleXAxisChart from "./BubbleChartComponent";




 const BubbleChart =() =>{
    return(<Box sx={{ bgcolor: '#B3E0FF' , height:"100%" , borderRadius:3}}> 
             <Box sx={{ display: 'flex', width: '100%'}}>
                <Box sx={{ flexGrow: 1 ,textAlign:"left", justifyContent:"flex-start" }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 ,margin:1}}>
                        Project workload
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
                        primary="Last 30 months"
                        sx={{ flex: 1 }} // Ensure text takes up available space
                        primaryTypographyProps={{ sx: { fontSize: '10px' } }} // Adjust font size for primary text
                        secondaryTypographyProps={{ sx: { fontSize: '12px' } }} // Adjust font size for secondary text
                    />
                    <ExpandMoreIcon /> {/* Add down arrow */}
                  </ListItemButton>
                </List>
            </Box>  
            <CircleXAxisChart/> 
        </Box>)
}

export default BubbleChart;