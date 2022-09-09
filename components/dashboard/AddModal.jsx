/* eslint-disable react/no-unknown-property */
import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

import axios from "axios";
import { useRouter } from "next/router";



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

const AddModal = ({ handleOpen, handleClose, setOpen}) => {

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);



  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dghl5ieey/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
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
            Add Coffee
          </Typography>
          <Box
      component="form"
      sx={{
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e) => setFile(e.target.files[0])} sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" label=""  type='file'/>
      <TextField onChange={(e) => setTitle(e.target.value)} sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" label="Title" variant="outlined" />
      <TextField onChange={(e) => setDesc(e.target.value)} sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" multiline rows={2} label="Description" variant="outlined" />

      <Box sx={{display: 'flex'}}>

      <TextField  onChange={(e) => changePrice(e, 0)} sx={{marginBottom: '10px', marginRight: '5px'}}  id="outlined-basic" label="Small" variant="outlined" type='number' />
      <TextField  onChange={(e) => changePrice(e, 1)} sx={{marginBottom: '10px', marginRight: '5px'}}  id="outlined-basic" label="Medium" variant="outlined" type='number' />
      <TextField  onChange={(e) => changePrice(e, 2)} sx={{marginBottom: '10px'}}  id="outlined-basic" label="Large" variant="outlined" type='number' />
      </Box>

      <Box sx={{display: 'flex'}}>

        <TextField name='text' onChange={handleExtraInput} sx={{marginBottom: '10px', marginRight: '5px'}} fullWidth id="outlined-basic" label="Item" variant="outlined" />
        <TextField name='price' onChange={handleExtraInput} sx={{marginBottom: '10px', marginRight: '5px'}} fullWidth id="outlined-basic" label="Price" variant="outlined" type='number'/>
        <Button onClick={handleExtra} sx={{height:'55px'}} variant="contained" size="large" color='secondary'> Add</Button>
      </Box>

      <Box sx={{display: 'flex'}}>
            {extraOptions.map((option) => (
              <Box key={option.text} sx={{paddingRight:'5px', paddingBottom:'10px'}} >
                <Chip label={option.text} />
                
              </Box>
            ))}
      </Box>

      <Button onClick={handleCreate} fullWidth variant="contained" size="large"> Create</Button>
    </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default AddModal