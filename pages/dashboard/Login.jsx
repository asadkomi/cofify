import React, { useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import { Grid, Box,Typography, TextField, Button } from '@mui/material';


const Login = () => {
    const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/dashboard");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Grid container spacing={2} sx={{height:'100vh', backgroundColor: "#432d2d",}}>
        <Grid xs={12} md={12} sx={{display: 'flex', justifyContent: 'center', alignItems:'center', margin:'auto'}}>
        <Box sx={{width:{xs: '350px',sm:'400px'},marginLeft: {xs:'20px'}, borderRadius:'10px' , height:'450px', bgcolor: 'background.paper', boxShadow: 24,}}>
            <Box sx={{
                    width:'300px', 
                    margin: 'auto',
                    padding: '50px 0',

                }}>

            <Typography sx={{marginBottom: '40px', }} id="modal-modal-title" variant="h3" component="h2">
                Login
            </Typography>
            <Box
                component="form"
                
                noValidate
                autoComplete="off"
                >
                <TextField onChange={(e) => setUsername(e.target.value)} sx={{marginBottom: '30px'}} fullWidth id="outlined-basic" label="Username" variant="outlined" />
                <TextField onChange={(e) => setPassword(e.target.value)} sx={{marginBottom: '50px'}} fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' />
                {/* <TextField onChange={(e) => setAddress(e.target.value)} sx={{marginBottom: '10px'}} fullWidth id="outlined-basic" multiline rows={4} label="Address" variant="outlined" /> */}
                <Button onClick={handleClick} fullWidth variant="contained" size="large"> Login</Button>
                {error && <span style={{color: 'red', textAlign:'center', marginTop:'10px'}}>Wrong Credentials!</span>}
            </Box>
            </Box>
        </Box>


        </Grid>
    </Grid>
  )
}

export default Login