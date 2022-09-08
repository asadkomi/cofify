import React from "react";
import {
  
  Typography,
  Box,
} from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import DoorbellIcon from '@mui/icons-material/Doorbell';

import styles from '../../styles/Order.module.css'


const OrderStatus = ({order , status}) => {

  // const status = 0;
  const statusClass = (index) => {
    if(index - status < 1) return styles.done;
    if(index - status === 1) return styles.inProgress;
    if(index - status > 1) return styles.unDone;
  }
  return (

    
      <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'start', alignItems:'center', textAlign: 'center', color: 'white', margin: {xs: '40px 0',sm:'120px 0px'} }}>
         <Box className={statusClass(0)} sx={{marginRight: {xs:'20px', sm:'40px'}}}>
            <PaymentIcon sx={{fontSize: {xs:'70px' ,sm:'140px'}, marginBottom: {sm:'-20px'}}} />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Typography sx={{marginRight: '10px', fontSize: {xs:"12px", sm:'18px'} }}> Payment </Typography>
            <CheckCircleIcon fontSize="12px" color="success" />
            </Box>
          </Box>
         <Box className={statusClass(1)} sx={{marginRight: {xs:'20px',sm:'40px'}}}>
            <MicrowaveIcon sx={{fontSize: {xs:'70px' ,sm:'140px'}, marginBottom: {sm:'-20px'}}} />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Typography sx={{marginRight: '10px', fontSize: {xs:"12px", sm:'18px'} }}> On Stove </Typography>
            <CheckCircleIcon fontSize="12px" className={styles.checkedIcon} />
            </Box>
          </Box>
         <Box className={statusClass(2)} sx={{marginRight: {xs:'20px',sm:'40px'}}}>
            <DeliveryDiningIcon sx={{fontSize: {xs:'70px' ,sm:'140px'}, marginBottom: {sm:'-20px'}}} />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Typography sx={{marginRight: '10px', fontSize: {xs:"12px", sm:'18px'} }}> On The Way </Typography>
            <CheckCircleIcon fontSize="12px"  className={styles.checkedIcon}/>
            </Box>
          </Box>
         <Box className={statusClass(3)} sx={{}}>
            <DoorbellIcon sx={{fontSize: {xs:'70px' ,sm:'140px'}, marginBottom: {sm:'-20px'}}} />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <Typography sx={{marginRight: '10px', fontSize: {xs:"12px", sm:'18px'},}}> Delivered </Typography>
            <CheckCircleIcon fontSize="12px"  className={styles.checkedIcon} />
            </Box>
          </Box>
          
      </Box>
     
    
  );
};

export default OrderStatus;
