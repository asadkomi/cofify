import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '360px', md:400},
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

const OrdaerModal = ({handleOpen,handleClose, total, createOrder }) => {

  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div >

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{marginBottom: '10px'}} id="modal-modal-title" variant="h6" component="h2">
            Information
          </Typography>
          <Box
      component="form"
      sx={{
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e) => setCustomer(e.target.value)} sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" label="Name" variant="outlined" />
      <TextField  sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" label="Phone" variant="outlined" />
      <TextField onChange={(e) => setAddress(e.target.value)} sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" multiline rows={4} label="Address" variant="outlined" />
      <Button onClick={handleClick} fullWidth variant="contained" size="large"> Order Now</Button>
    </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default OrdaerModal