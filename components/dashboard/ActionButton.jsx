import React,{useState} from 'react'
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';

const ActionButton = ({handleOpen, handleClose}) => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, paddingLeft:'10px', display:'flex', alignItems:'center' }}> 
      <Fab color="secondary" aria-label="add">
        <AddIcon onClick={() => handleOpen}/> 
      </Fab>
      <Typography color='white'>

        Add Coffee
      </Typography>
    </Box>
  )
}

export default ActionButton