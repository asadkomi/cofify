import React from "react";
import { Divider, Grid, Typography, Box } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import Image from "next/image";

const Footer = () => {
  return (
    <Grid
      container
      spacing={0}
      // height="300px"
      sx={{ backgroundColor: "#432d2d", color: "white", padding: "30px 30px", borderTop: '1px solid #f1f1f1' }}
    >
      
<Grid item xs={12} sm={6} md={4} lg={3}  sx={{ 
               display: 'flex',
               alignItems: 'center',
               p: '30px 0'
           }}>

          <Box sx={{marginBottom:'7px', marginRight:'5px' }}>

              <Image src='/assets/logo2.svg' alt="product" width="50" height="50"  />
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            COFFIFY
            </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:'10px 0'}}>
        <Typography fontWeight='bold' variant='h6' sx={{marginBottom:'20px'}}>Quick Links</Typography>
        <Typography>Home</Typography>
        <Typography>Menu</Typography>
        <Typography>About</Typography>
        
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:'10px 0'}}>
      <Typography fontWeight='bold' variant='h6' sx={{marginBottom:'20px'}}>Information</Typography>
        <Typography>FAQ</Typography>
        <Typography>Help Center</Typography>
        <Typography>Track Order</Typography>
        
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:'10px 0'}}>
      <Typography fontWeight='bold' variant='h6' sx={{marginBottom:'20px'}}>Polices</Typography>
        <Typography>Return policy</Typography>
        <Typography>Shipping policy</Typography>
        <Typography>Terms of service</Typography>
       
      </Grid>
    </Grid>
  );
};

export default Footer;
