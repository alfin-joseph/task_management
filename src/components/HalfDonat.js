import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const SemiCircularProgressBar = ({ value1, value2, value3 }) => {
    const totalValue = value1 + value2 + value3;
    const percentage1 = (value1 / totalValue) * 100;
    const percentage2 = (value2 / totalValue) * 100;
    const percentage3 = (value3 / totalValue) * 100;
  
    const radius = 90;
    const circumference = Math.PI * radius;

    return (
        <Box sx={{ textAlign: 'center' ,justifyContent:"center" , marginTop:5 }}>
          <svg width="250" height="150" viewBox="0 0 200 100">
            <path
              d="M 10,90 A 90,90 0 0,1 190,90"
              fill="none"
              stroke="#d3d3d3"
              strokeWidth="10"
            />
            <path
              d="M 10,90 A 90,90 0 0,1 190,90"
              fill="none"
              stroke="#00BA09"
              strokeWidth="10"
              strokeDasharray={`${(percentage1 / 100) * circumference} ${circumference}`}
            />
            <path
              d="M 10,90 A 90,90 0 0,1 190,90"
              fill="none"
              stroke="#E0F500"
              strokeWidth="10"
              strokeDasharray={`${(percentage2 / 100) * circumference} ${circumference}`}
              strokeDashoffset={`-${(percentage1 / 100) * circumference}`}
            />
            <path
              d="M 10,90 A 90,90 0 0,1 190,90"
              fill="none"
              stroke="#F58516"
              strokeWidth="10"
              strokeDasharray={`${(percentage3 / 100) * circumference} ${circumference}`}
              strokeDashoffset={`-${((percentage1 + percentage2) / 100) * circumference}`}
            />
            <text x="100" y="70" textAnchor="middle" fontSize="24" fill="#000">
            {Math.round((totalValue / (value1 + value2 + value3)) * 100)}%
            </text>
          </svg>
        </Box>
      );
    };

export default SemiCircularProgressBar