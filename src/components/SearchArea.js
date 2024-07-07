import * as React from 'react';
import { Box , TextField ,InputAdornment , useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



export default function SearchArea() {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const [text , setText] = React.useState('')


  // Adjust width based on screen size
  const width = isSmallScreen ? '50%' : isMediumScreen ? 200 : 300;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: width,
          maxWidth: '100%',
          textAlign: 'center',
        //   marginTop:5,
        }}
      >
        <TextField
          fullWidth
          // label="Search anything"
          id="searchField"
          onChange={(e) => setText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                // onClick={() => search()}
                sx={{ cursor: 'pointer' }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            // height:5, 
            '& .MuiOutlinedInput-root': {
              bgcolor:"white",
              height:40, 
              borderRadius: '20px', // Change border radius
              '& fieldset': {
                borderColor: 'grey', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'black', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', // Border color when focused
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'black', // Label color when focused
                // marginTop:"-10px"
              },
              '& .MuiInputLabel-root': {
                left: '50%', // Center the label
                transform: 'translateX(-50%)', // Adjust for true centering
                '&.Mui-focused': {
                  color: 'black', // Label color when focused
                  left: '50%', // Ensure it stays centered when focused
                  transform: 'translateX(-50%)', // Adjust for true centering when focused
                },
              }
            },
          }}
        />
      </Box>
    </Box>
  );
}

