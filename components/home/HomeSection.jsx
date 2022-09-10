import { Grid, Box } from "@mui/material";
import React from "react";
import Hero from "../hero/Hero.jsx";
import HeroSmall from "../hero/HeroSmall.jsx";
import CoffeeList from "./CoffeeList.jsx";

const Home = ({coffeeList}) => {
  return (
    <Grid container spacing={0} sx={{ backgroundColor: "#432d2d" }}>
      <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
       
       

        <Hero />
       <HeroSmall />
      
      </Grid>
      <Grid item xs={12} sx={{padding:'50px 0'}}>
        <CoffeeList coffeeList={coffeeList} />
      
      
      </Grid>
    </Grid>
  );
};

export default Home;
