import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SearchArea from './SearchArea';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar , Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { rowData } from '../utils/data';
import DataContext from './context/dataContext';

const drawerWidth = 240;
const ListElements = [
    {text:'Projects',icon:<BusinessCenterOutlinedIcon sx={{color:"white"}}/> , link:"/"},
    {text:'Tasks',icon:<FormatListNumberedOutlinedIcon sx={{color:"white"}}/> , link:"/tasks"},
    {text:'Dashbord',icon:<GridViewOutlinedIcon sx={{color:"white"}}/>,link:"/"},
    {text:'Timelog',icon:<AvTimerOutlinedIcon sx={{color:"white"}}/>,link:"/"},
    {text:'Users',icon:<GroupOutlinedIcon sx={{color:"white"}}/>,link:"/"},
    {text:'Settings',icon:<SettingsOutlinedIcon sx={{color:"white"}}/>,link:"/"}
]
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor:"#0C0A5E",
  color:"white",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:"#0C0A5E",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    width: '100%',
    height: '100%',
    // display: 'flex',
    // backgroundColor:"red",
    flexDirection: 'column',
}))

export default function MiniDrawer() {
  const theme = useTheme();
  const [data, setData] = React.useState(rowData);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "linear-gradient(90deg, rgba(0,202,245,1) 0%, rgba(16,87,249,1) 89%, rgba(94,9,230,1) 100%)"

 }}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:"black"}}>
            Dashboard
          </Typography>
          <Typography variant="h4" noWrap component="div"  sx={{ 
                flexGrow: 1, 
                fontFamily: 'Arial', // Change to desired font family
                fontSize: '1.5rem', // Change to desired font size
                fontWeight: 'bold', // Change to desired font weight
                color: '#000', // Change to desired color
            }}>
            Task Management
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 'auto' }}>
            <SearchArea sx={{ marginRight: 2 }} />
            <IconButton sx={{ bgcolor: "white", margin: 1 }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ bgcolor: 'none', borderRadius: '8px' }} // Set border radius for the entire list
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
                  overflow:"hidden",
                  mr: 1,
                }}
              >
                <Avatar alt="Alex Melon" src="/path/to/image.jpg" sx={{ marginLeft: "-12px", mr: 1, height: "35px", fontSize: "13px" }} /> {/* Add avatar */}
                <ListItemText
                  primary="Alex melon"
                  secondary="Product manager"
                  sx={{ flex: 1 }} // Ensure text takes up available space
                  primaryTypographyProps={{ sx: { fontSize: 12} }} // Adjust font size for primary text
                  secondaryTypographyProps={{ sx: { fontSize: 8 } }} // Adjust font size for secondary text
                />
                <ExpandMoreIcon /> {/* Add down arrow */}
              </ListItemButton>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <Typography variant="h4" noWrap component="div"  sx={{ 
                flexGrow: 1, 
                fontFamily: 'Arial', // Change to desired font family
                fontSize: '1.5rem', // Change to desired font size
                fontWeight: 'bold', // Change to desired font weight
                color: 'white', // Change to desired color
            }}>
            Task Management
          </Typography>
          <IconButton onClick={handleDrawerClose} sx={{bgcolor:"white"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider /> 
        {open ? <Box sx={{display:"flex" ,borderRadius:"30px",padding:0.3 ,bgcolor:"white" , margin:5}}>
          <IconButton sx={{bgcolor:"#8FD4FF",}}>
            <AddIcon sx={{color:"white" }}/>
          </IconButton>
            <Box sx={{justifyContent:"center" ,

            }}>
            <Typography variant="button" display="block" sx={{ fontSize: '10px', fontWeight: 'bold' ,color:"black"}}>
                Create new
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: '12px', color: 'black' }}>
                project
            </Typography>
            </Box>
        </Box>:
         <IconButton sx={{bgcolor:"#8FD4FF",margin:1.2}}>
            <AddIcon sx={{color:"white" }}/>
          </IconButton>
        }
        {open ? <Box sx={{display:"flex" ,borderRadius:"30px",padding:0.3 ,bgcolor:"white" , margin:5,marginTop:1, marginBottom:1}}>
          <IconButton sx={{bgcolor:"#8FD4FF",}}>
            <GridViewOutlinedIcon sx={{color:"white" }}/>
          </IconButton>
            {/* <Box sx={{justifyContent:"center" ,
            }}> */}
            <Typography variant="button" display="block" sx={{padding:1, fontSize: '10px', fontWeight: 'bold' ,color:"black"}}>
              Dashboard
            </Typography>
            {/* </Box> */}
        </Box>:
         <IconButton sx={{bgcolor:"#8FD4FF",margin:1.2}}>
          <GridViewOutlinedIcon sx={{color:"white" }}/>
         </IconButton>
        }

        <List>
          {ListElements.map((item, index) => (
            <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <Box sx={{textAlign:"left" ,left:10, bottom:20, position:"absolute"}}>
          <IconButton sx={{bgcolor:"#8FD4FF" , borderRadius:"50%"}}>
            <HelpOutlineIcon sx={{color:"white"}}/>
          </IconButton>
        </Box>
       
      </Drawer>

      <Main>
        <DrawerHeader />
        <DataContext.Provider value={{data ,setData}}>
             <Outlet />
        </DataContext.Provider> 
      </Main>
    </Box>
  );
}
