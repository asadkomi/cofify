import React from "react";
import Link from 'next/link'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ImgHero3 from "../../public/assets/hero.svg";

const CoffeeCard = ({coffee}) => {
  return (
    <Link href={`/product/${coffee._id}`} passHref>
    <Card sx={{ width: "100%", cursor:'pointer' }} color="transparent">
      <CardMedia
        component="img"
        alt="Card"
        height="240"
        image={coffee.img}
        sx={{}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {coffee.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${coffee.prices[0]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {coffee.desc}
        </Typography>
      </CardContent>
      {/* <CardActions>
        
        <Button variant="contained" size="small">Add to cart</Button>

      </CardActions> */}
    </Card>
        </Link>
  );
};

export default CoffeeCard;
