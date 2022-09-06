import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const Footer = () => {
  return (
    <Grid
      container
      spacing={0}
      // height="300px"
      sx={{ backgroundColor: "#432d2d", color: "white", padding: "30px 30px", borderTop: '1px solid #fff' }}
    >
      
<Grid item xs={12} sm={6} md={4} lg={3}  sx={{ 
               display: 'flex',
               alignItems: 'center',
               p: '30px 0'
           }}>
      <LocalCafeIcon
            sx={{ 
               mr: 1, color: "white",
               fontSize: '40px'
           }}
          />
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
            COFIFY
            </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:'10px 0'}}>
        <Typography>Menu One</Typography>
        <Typography>Menu One</Typography>
        <Typography>Menu One</Typography>
        <Typography>Menu One</Typography>
        <Typography>Menu One</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:'10px 0'}}>
        <Typography>Menu Two</Typography>
        <Typography>Menu Two</Typography>
        <Typography>Menu Two</Typography>
        <Typography>Menu Two</Typography>
        <Typography>Menu Two</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:'10px 0'}}>
        <Typography>Menu Three</Typography>
        <Typography>Menu Three</Typography>
        <Typography>Menu Three</Typography>
        <Typography>Menu Three</Typography>
        <Typography>Menu Three</Typography>
        <Typography>Menu Three</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
