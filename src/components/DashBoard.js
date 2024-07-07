import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MainTiles } from "./MainTiles";
import ProjectsDetails from "./ProjectTable";
import TaskDetails from "./TaskDetails";


export default function DashBoard(){
    return(
        <Box
        sx={{
          width: '100%',
          height: '100%',
          // bgcolor: '#8FD4FF',
        //   display: 'flex',
        //   justifyContent: 'center', // Optional: centers content horizontally
        //   alignItems: 'center',     // Optional: centers content vertically
        }}
      >
       <Box sx={{ display: 'flex', width: '100%'}}>
          <Box sx={{ flexGrow: 1 ,textAlign:"left", justifyContent:"flex-start" }}>
            <Typography variant="h6" sx={{ flexGrow: 1 ,margin:1}}>
                Overview
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
            primary="Last 30 days"
            sx={{ flex: 1 }} // Ensure text takes up available space
            primaryTypographyProps={{ sx: { fontSize: '14px' } }} // Adjust font size for primary text
            secondaryTypographyProps={{ sx: { fontSize: '12px' } }} // Adjust font size for secondary text
          />
          <ExpandMoreIcon /> {/* Add down arrow */}
        </ListItemButton>
      </List>
    </Box>
    <MainTiles/>
    <ProjectsDetails/>
    <TaskDetails/>
</Box>
   )
}