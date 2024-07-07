import { Box, Button, Stack } from "@mui/material";
import TypeSearch from "./TaskSearch";
import TaskColumns from "./TaskItems";
import { useState } from "react";
import TaskFormModal from "./AddtaskModalForm";



export default function TaskView(){
    const [open , setOpen] = useState(false)
    const [task , setTask] = useState(null)
    const buttonStyles = {
        width: '150px',  // Adjust to desired width
        height: '40px',  // Adjust to desired height
        bgcolor: '#EDF2FC',
        color:"black"
      };
    return(<Box sx={{width:"100%" ,  minHeight: '100vh', maxHeight: '100%', padding:2 ,}}>
           <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <TypeSearch/>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" sx={buttonStyles} onClick={()=>setOpen(true)}> New item</Button>
                    <Button variant="contained" sx={buttonStyles}>Filter</Button>
                    <Button variant="contained" sx={buttonStyles}>Board</Button>
                </Stack>
           </Box>
           <TaskColumns open={open} setOpen={setOpen} task={task} setTask={setTask}/>
           <TaskFormModal open={open} setOpen={setOpen} task={task} setTask={setTask}/>
         </Box>)}