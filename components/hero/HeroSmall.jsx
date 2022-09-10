import React from "react";
import Carousel from "react-material-ui-carousel";
import NextLink from "next/link";
import Image from "next/image";
import { Grid, Link, Box } from "@mui/material";

import One from "../../public/assets/1.svg";
import Two from "../../public/assets/2.svg";
import Three from "../../public/assets/3.svg";
import Four from "../../public/assets/4.svg";
import Five from "../../public/assets/5.svg";
import Six from "../../public/assets/6.svg";

const featureImages = [
  {
    id: 1,
    // title: 'Image One',
    image: One,
  },
  {
    id: 2,
    // title: 'Image One',
    image: Two,
  },
  {
    id: 3,
    // title: 'Image One',
    image: Three,
  },
  {
    id: 4,
    // title: 'Image One',
    image: Four,
  },
  {
    id: 5,
    // title: 'Image One',
    image: Five,
  },
  {
    id: 6,
    // title: 'Image One',
    image: Six,
  },
];

const HeroSmall = () => {
  return (
    <Box sx={{width:'100%', height: '500px', display:{ sm:'none'}}}>
      <Carousel
        autoPlay={true}
        animation="fade"
        sx={{
          // marginBottom: "20px",
          display:{sm:'none', md:'none', lg:'none'} ,
          width: '100%',
          height: '100%',
          backgroundColor: "#432d2d"
        }}
      >
        {featureImages.map((item) => (
          <NextLink href={`/product/`} passHref key={item.id}>
            <Link>
              <Image
                src={item.image}
                alt="hero"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              />
            </Link>
          </NextLink>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSmall;
