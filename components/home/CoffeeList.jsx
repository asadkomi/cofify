import { Grid, Typography } from "@mui/material";
import React from "react";
import CoffeeCard from "./CoffeeCard.jsx";

const CoffeeList = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        // padding="40px 30px"

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
            // backgroundColor: "black",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography

            sx={{ textAlign: "center", padding: "20px 0px",fontWeight: 'bold', fontSize: {xs:'28px', sm: '36px'}, marginTop: {xs: '20px'} }}
          >
            Heading
          </Typography>
          <Typography
            maxWidth="600px"
            variant="h5"
            sx={{ textAlign: "center", padding: "40px 20px", fontSize: {xs:'18px', sm: '24px'} }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </Typography>
        </Grid>
        <Grid direction="column" item lg={3} md={3} sm={12} sx={{}}></Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        padding="40px 30px"
        sx={{
          display: "flex",
          backgroundColor: "#432d2d",
          flexDirection: "row",
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{}}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{}}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{}}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{}}>
          <CoffeeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{}}>
          <CoffeeCard />
        </Grid>
      </Grid>
    </>
  );
};

export default CoffeeList;
