import { Grid, Typography , Box} from '@mui/material';
import React from 'react';


const array = [{name:"sam",task:7},
    {name:"alex",task:2},
    {name:"john",task:8},
    {name:"mosh",task:10},
    {name:"kiran",task:2},
    {name:"rock",task:7},

]


const CircleXAxisChart = () => {
    const formArray = (num) =>{
        const newArray = Array.from({ num }, (_, index) => index + 1);
        return newArray 
    }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '75%' }} >
     <Grid container justifyContent="space-evenly" alignItems="flex-end" >
        {
        array.map((item,index)=><Grid item justifyContent="center" alignItems="center">
               {
                 Array.from(Array(item.task)).map((num, ind)=><>
                 { ind % 2 == 0 &&
                    <Box sx={ind===0 ? {
                        height:35,
                        width:35,
                        borderRadius:8,
                        border:"1px solid black" ,
                        justifyContent:"center", 
                        alignItems:"center" ,
                        textAlign:"center" ,
                        color:"white",
                        bgcolor:"black"
                       }:{height:35,
                        width:35,
                        borderRadius:8,
                        border:"1px solid black"}}>

                        {ind === 0 ? item.task :""}

                    </Box>}
                </>)
               }
                   
                <Typography sx={{fontSize:"0.7em" ,marginTop:1}}>
                  {item.name}
                </Typography>
            </Grid>)
        }
                
            </Grid>
    </Box>
  );
};

export default CircleXAxisChart;
