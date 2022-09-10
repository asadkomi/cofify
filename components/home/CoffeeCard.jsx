import React from "react";
import Link from 'next/link'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ImgHero3 from "../../public/assets/hero.svg";

const CoffeeCard = ({coffee}) => {
  return (
    <Link href={`/product/${coffee._id}`} passHref>
    <Box sx={{ width: "100%", cursor:'pointer', backgroundColor:'transparent', padding:'30px 0' }} color="transparent">
      <CardMedia
        component="img"
        alt="Card"

        height="300"
        
        image={coffee.img}
        sx={{ }}
      />
      <CardContent sx={{textAlign:'center'}}>
        <Typography color="white" gutterBottom variant="h5" component="div">
          {coffee.title} ${coffee.prices[0]}
        </Typography>
        <Typography color="white" gutterBottom variant="h5" component="div">
         {/* Start at ${coffee.prices[0]} */}
        </Typography>
        <Typography  variant="body2" color="white">
          {/* {coffee.desc.slice(0, 50)} ... */}
        </Typography>
        <Button variant="contained" size="small" color='secondary'>Order now</Button>
      </CardContent>
      {/* <CardActions>
        
        <Button variant="contained" size="small">Add to cart</Button>

      </CardActions> */}
    </Box>
        </Link>
  );
};

export default CoffeeCard;
