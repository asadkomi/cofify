import React from "react";
import Carousel from "react-material-ui-carousel";
import NextLink from "next/link";
import Image from "next/image";
import { Grid, Link, Box } from "@mui/material";

import one from "../../public/assets/h1.svg";
import two from "../../public/assets/h2.svg";
import three from "../../public/assets/h3.svg";
import four from "../../public/assets/h4.svg";
import five from "../../public/assets/h5.svg";
import six from "../../public/assets/h6.svg";

const featureImages = [
  {
    id: 1,
    // title: 'Image One',
    image: one,
  },
  {
    id: 2,
    // title: 'Image One',
    image: two,
  },
  {
    id: 3,
    // title: 'Image One',
    image: three,
  },
  {
    id: 4,
    // title: 'Image One',
    image: four,
  },
  {
    id: 5,
    // title: 'Image One',
    image: five,
  },
  {
    id: 6,
    // title: 'Image One',
    image: six,
  },
];

const Hero = () => {
  return (
    <Box sx={{width:'100%', display:{xs:'none', sm:'flex'}}}>
      <Carousel
        autoPlay={true}
        animation="fade"
        sx={{
          // marginBottom: "20px",
          // display:{xs:'none'} ,
          width: '100%',
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
                height="50%"
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

export default Hero;
