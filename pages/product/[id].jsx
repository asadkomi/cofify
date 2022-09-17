import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import axios from "axios";

import ProductImg from "../../components/product/ProductImg.jsx";
import ProductDetails from "../../components/product/ProductDetails";

const Product = ({ coffee }) => {
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
        // height:{sm:'100vh'}
        padding: { sm: "200px 30px" },
      }}
    >
      <Grid item xs={12} sm={6} sx={{}}>
        <ProductImg coffee={coffee} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProductDetails coffee={coffee} />
      </Grid>
    </Grid>
  );
};

export const getServerSideProps = async ({ params }) => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      coffee: res.data,
      // admin,
    },
  };
};

export default Product;
