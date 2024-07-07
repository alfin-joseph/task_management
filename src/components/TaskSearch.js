import React from 'react';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: 'auto',  // Adjust width
  '& .MuiInputBase-root': {
    height: '40px',  // Adjust height of the input area
  },
}));

const TypeSearch = () => {
  return (
    <FormControl sx={{bgcolor:"white", borderRadius:2}}>
      <CustomTextField
        label="search items"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default TypeSearch;
