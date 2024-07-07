import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { generateId } from '../utils/data';
import DataContext from './context/dataContext';

export default function TaskFormModal(props) {
  const { open, setOpen, task ,setTask} = props;
  const {data ,setData} = React.useContext(DataContext)
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [error, setError] = React.useState({});

  const handleClose = () => {
    setOpen(false);
    setTask(null)
  };
  React.useEffect(()=>{
    setTitle('')
    setContent('')
    setPriority('')
    setDueDate('')
    setStatus('')
      if(task){
        setTitle(task.title)
        setContent(task.description)
        setPriority(task.priority)
        setDueDate(task.dueDate)
        setStatus(task.status)
      }
  },[task])
  const handleSubmit = async () => {
    const newError = {};
    if (title === '') newError.title = true;
    if (content === '') newError.content = true;
    if (priority === '') newError.priority = true;
    if (dueDate === '') newError.dueDate = true;
    if (status === '') newError.status = true;

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    else if(task){
        const newTask = { id: task.id, title:title, description:content,dueDate:dueDate,status:status ,priority:priority};
        await setData(prevBoard => {
            const newColumns = { ...prevBoard.columns };
            newColumns[task.status].tasks = newColumns[task.status].tasks.filter(tsk => tsk.id !== task.id);
            return { ...prevBoard, columns: newColumns };
          });
        await setData(prevBoard => {
          const newColumns = { ...prevBoard.columns };
          newColumns[status].tasks.push(newTask);
          return { ...prevBoard, columns: newColumns };
        });
        setTask(null)
        setOpen(false)
        setTitle('')
        setContent('')
        setPriority('')
        setDueDate('')
        setStatus('')
    }else{
    const newTask = { id: generateId(), title:title, description:content,dueDate:dueDate,status:status ,priority:priority };
    setData(prevBoard => {
      const newColumns = { ...prevBoard.columns };
      newColumns[status].tasks.push(newTask);
      return { ...prevBoard, columns: newColumns };
    });
    setOpen(false)
    setTask(null)
    setTitle('')
    setContent('')
    setPriority('')
    setDueDate('')
    setStatus('')
   }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md" // Set the max width to 'md' (medium) or adjust as needed
      fullWidth // Ensures the dialog takes full width of the viewport
      sx={{ '& .MuiDialog-paper': { width: '80%' } }} // Custom styling to set width to max-content
    >
      <DialogTitle>Create Task</DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
          sx={error.hasOwnProperty('title') ? { border: "1px solid red" } : {}}
        />

        <TextField
          placeholder="Write content"
          multiline
          fullWidth
          id="content"
          label="Description"
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={4}
          maxRows={7}
          sx={error.hasOwnProperty('content') ? { border: "1px solid red" } : {}}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            id="priority"
            value={priority}
            label="Priority"
            sx={error.hasOwnProperty('priority') ? { border: "1px solid red" } : {}}
            onChange={e => setPriority(e.target.value)}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="normal"
          fullWidth
          id="dueDate"
          label="Due Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          sx={error.hasOwnProperty('dueDate') ? { border: "1px solid red" } : {}}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={status}
            label="Status"
            sx={error.hasOwnProperty('status') ? { border: "1px solid red" } : {}}
            onChange={e => setStatus(e.target.value)}
          >
            <MenuItem value="todo">To Do</MenuItem>
            <MenuItem value="inprogress">In Progress</MenuItem>
            <MenuItem value="inreview">In Review</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "black", border: "1px solid black" }} onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
