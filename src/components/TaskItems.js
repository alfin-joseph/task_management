import React, { useContext, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Grid, Paper, Typography, IconButton, Button, Card, CardContent, CardActions } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { generateId, rowData } from '../utils/data';
import DataContext from './context/dataContext';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
// Helper function to generate unique IDs




const CardComponent = ({ task ,columnId , deleteTaskFromColumn , editTask}) => (
  <Card sx={{margin:1 ,cursor:"grab"}}>
    <CardContent sx={{textAlign:"left"}}>
      <Typography variant="h6">{task.title}</Typography>
        <Typography
          variant="body2"
          sx={{
            maxHeight: '100px',  // Set your desired max height
            overflow: 'hidden',  // Hide overflow content
            textOverflow: 'ellipsis',  // Add ellipsis to indicate overflowing text
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,  // Number of lines to show before truncating
            wordWrap: 'break-word',  // Ensure words break properly
            maxWidth: '100%',  // Ensure the text doesn't overflow the container
          }}
        >
           {task.description}
     </Typography>
    </CardContent>
    <CardActions sx={{justifyContent:"space-between"}}>
    <Box>
      <Typography sx={{fontSize:12}}>
         due date :{task.dueDate}
      </Typography>
      </Box>
      <Box sx={{display:"flex" ,}}>
        <IconButton onClick={() => {
            editTask(task)}}>
            <BorderColorOutlinedIcon/>
        </IconButton>
        <IconButton onClick={()=>deleteTaskFromColumn(columnId,task.id)}>
            <DeleteOutlineOutlinedIcon/> 
        </IconButton>
      </Box>
    </CardActions>
  </Card>
);

const TaskColumns = (props) => {
  const {open ,setOpen , task , setTask} = props
  const {data ,setData} = useContext(DataContext);

  const moveTask = (sourceId, destinationId, taskId, newIndex) => {
    const sourceColumn = data.columns[sourceId];
    const destinationColumn = data.columns[destinationId];
    const movedTask = sourceColumn.tasks.find(task => task.id === taskId);

    // Remove task from source column
    sourceColumn.tasks = sourceColumn.tasks.filter(task => task.id !== taskId);

    // Insert task into destination column at newIndex
    destinationColumn.tasks.splice(newIndex, 0, movedTask);

    setData({
      ...data,
      columns: {
        ...data.columns,
        [sourceId]: sourceColumn,
        [destinationId]: destinationColumn,
      },
    });
  };
  const handleAddnewTask = (stat) =>{
    
    const newTask = { id: generateId(), title:"", description:"" ,status:stat,priority:"",dueDate:""};
    setTask(newTask)
    setOpen(true)
  }
  const editTask = async (item) =>{
    await setTask(item)
    await setOpen(true)
  }
  const deleteTaskFromColumn = (columnId, taskId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if(confirmDelete){
    setData(prevBoard => {
      const newColumns = { ...prevBoard.columns };
      newColumns[columnId].tasks = newColumns[columnId].tasks.filter(task => task.id !== taskId);
      return { ...prevBoard, columns: newColumns };
    });
    }
  };
  const handleDrop = (sourceId, destinationId, taskId, newIndex) => {
    if (sourceId === destinationId) {
      // Reorder within the same column
      moveTask(sourceId, destinationId, taskId, newIndex);
    } else {
      // Move task across different columns
      moveTask(sourceId, destinationId, taskId, newIndex);
    }
  };
   
  const Task = ({ columnId, task, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'TASK',
      item: { columnId, taskId: task.id, index },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'TASK',
      hover: (item, monitor) => {
        if (item.taskId !== task.id) {
          const dragIndex = item.index;
          const hoverIndex = index;
          const sourceId = item.columnId;
          const destinationId = columnId;
          moveTask(sourceId, destinationId, item.taskId, hoverIndex);
          item.index = hoverIndex;
          item.columnId = destinationId;
        }
      },
    });

    return (
      <div ref={node => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <CardComponent task={task} columnId={columnId} deleteTaskFromColumn={deleteTaskFromColumn} editTask = {editTask } />
      </div>
    );
  };

  const Column = ({ column }) => {
    const [, drop] = useDrop({
      accept: 'TASK',
      drop: (item, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceId = item.columnId;
        const destinationId = column.id;
        if (sourceId !== destinationId || dragIndex !== hoverIndex) {
          moveTask(sourceId, destinationId, item.taskId, hoverIndex);
          item.index = hoverIndex;
          item.columnId = destinationId;
        }
      },
    });

    return (
      <Box ref={drop} sx={{height:"90vh" , overflowY:"auto",bgcolor:"#EDEBF2" , borderRadius:2 ,padding:1}}>
        <Box sx={{display:"flex" , justifyContent:"space-between"}}>
            <Box>
               <Typography variant="h6">
                {column.title}
                    <IconButton sx={{fontSize:16}}>
                        {column.tasks.length}
                    </IconButton>
               </Typography>
            </Box>
            <Box>
                <IconButton onClick={()=>handleAddnewTask(column.id)}>
                    <AddOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreHorizOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
        {column.tasks.length === 0 ? (
          <Box sx={{ minHeight: 50, backgroundColor: '#f0f0f0', marginBottom: 1 }} />
        ) : (
          column.tasks.map((task, index) => (
            <Box key={task.id} sx={{ marginBottom: 1 }}>
              <Task columnId={column.id} task={task} index={index} />
            </Box>
          ))
        )}
      </Box>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ flexGrow: 1, padding: 2, minHeight: '100vh' }}>
        <Grid container spacing={2}>
          {data.columnOrder.map(columnId => (
            <Grid key={columnId} item xs={12} sm={6} md={3} sx={{height: '100vh'}}>
              <Paper>
                <Column column={data.columns[columnId]} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DndProvider>
  );
};

export default TaskColumns;
