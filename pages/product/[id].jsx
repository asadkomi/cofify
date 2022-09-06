import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import ProductImg from "../../components/product/ProductImg.jsx";
import ProductDetails from "../../components/product/ProductDetails";

const Product = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#432d2d",
        color: "white",
        height:{sm:'100vh'}
      }}
    >
      <Grid item xs={12} sm={6} sx={{}}>
        <ProductImg />
      
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProductDetails />
      </Grid>
    </Grid>
  );
};

export default Product;
