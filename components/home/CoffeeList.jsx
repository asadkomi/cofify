import { Grid, Typography } from "@mui/material";
import React from "react";
import CoffeeCard from "./CoffeeCard.jsx";

const CoffeeList = ({coffeeList}) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        sx={{ backgroundColor: "#432d2d" }}
      >
        <Grid direction="column" item lg={3} md={3} sm={12} sx={{}}></Grid>
        <Grid
          direction="column"
          item
          lg={3}
          md={3}
          sm={12}
          sx={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography

            sx={{textTransform: 'uppercase', textAlign: "center", padding: "20px 0px",fontWeight: 'bold', fontSize: {xs:'18px', sm: '26px', md:'30px'}, marginTop: {xs: '20px'} }}
          >
            Try our delicious coffee today <br /> and taste the difference.
          </Typography>
          <Typography
            maxWidth="600px"
            variant="h5"
            sx={{ textAlign: "center", padding: {xs:"0 20px", sm:"20px 20px"}, fontSize: {xs:'14px', sm: '18px'}, color:'gray' }}
          >
            Coffify is a specialty coffee shop that delivers fresh, great-tasting coffee right to you.
            We offer the freshest, most aromatic smelling coffee at a fraction of what you’ve been paying.

          </Typography>
        </Grid>
        <Grid direction="column" item lg={3} md={3} sm={12} sx={{}}></Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        padding="100px 30px"
        sx={{
          display: "flex",
          backgroundColor: "#432d2d",
          flexDirection: "row",
        }}
      >

        {coffeeList.map((coffee) => (
        <Grid key={coffee._id} item xs={12} sm={6} md={4} lg={3} sx={{}}>

          <CoffeeCard  coffee={coffee}/>
        </Grid>
        ))}
        
      </Grid>
    </>
  );
};

export default CoffeeList;
