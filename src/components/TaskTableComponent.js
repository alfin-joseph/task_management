import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CircleCheckedFilled from '@mui/icons-material//CheckCircle';
import CircleUnchecked from '@mui/icons-material//RadioButtonUnchecked';

export default function TaskTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' ,bgcolor:"#B3E0FF" ,borderRadius:3}}>
       <Typography sx={{padding:2}}>
         Today Tasks
       </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" sx={{textTransform: 'none'}}/>
            <Tab label="Important" value="2" sx={{textTransform: 'none'}}/>
            <Tab label="Notes" value="3" sx={{textTransform: 'none'}} />
            <Tab label="Links" value="4" sx={{textTransform: 'none'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled sx={{color:"#00A6FF"}}/>}
            />
            <Typography sx={{ flexGrow: 1 }}>
                Create a user flow of social application design 
            </Typography>
            <Button variant="outlined" color="success" sx={{ borderRadius: 8, marginLeft: 'auto' ,textTransform: 'none'}}>
                Approved
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled sx={{color:"#00A6FF"}}/>}
            />
            <Typography sx={{ flexGrow: 1 }}>
                Create a user flow of social application design 
            </Typography>
            <Button variant="outlined" color="error" sx={{ borderRadius: 8, marginLeft: 'auto' , textTransform: 'none' }}>
                In review
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled sx={{color:"#00A6FF"}}/>}
            />
            <Typography sx={{ flexGrow: 1 }}>
                Create a user flow of social application design 
            </Typography>
            <Button variant="outlined" color="error" sx={{ borderRadius: 8, marginLeft: 'auto' , textTransform: 'none' }}>
               In review
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled sx={{color:"#00A6FF"}}/>}
            />
            <Typography sx={{ flexGrow: 1 }}>
                Create a user flow of social application design 
            </Typography>
            <Button variant="outlined"  sx={{ borderRadius: 8, marginLeft: 'auto', color:"#FFB20D" , borderColor:"#FFB20D" ,textTransform: 'none' }}>
                On going
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled sx={{color:"#00A6FF"}}/>}
            />
            <Typography sx={{ flexGrow: 1 }}>
                Create a user flow of social application design 
            </Typography>
            <Button variant="outlined" color="success" sx={{ borderRadius: 8, marginLeft: 'auto' ,textTransform: 'none'}}>
                Approved
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
