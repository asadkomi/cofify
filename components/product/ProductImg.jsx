import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const ProductImg = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/assets/hero.png" alt="product" width="500" height="500" />
    </Box>
  );
};

export default ProductImg;
