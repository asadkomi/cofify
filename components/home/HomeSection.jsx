import { Grid } from "@mui/material";
import React from "react";
import Hero from "../hero/Hero.jsx";
import CoffeeList from "./CoffeeList.jsx";

const Home = ({coffeeList}) => {
  return (
    <Grid container spacing={0} sx={{ backgroundColor: "#432d2d" }}>
      <Grid item xs={12} sx={{height:{sm:'100vh'} ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Hero />
      </Grid>
      <Grid item xs={12}>
        <CoffeeList coffeeList={coffeeList} />
      </Grid>
    </Grid>
  );
};

export default Home;
