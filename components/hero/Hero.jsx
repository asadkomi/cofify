import React from "react";
import Carousel from "react-material-ui-carousel";
import NextLink from "next/link";
import Image from "next/image";
import { Grid, Link } from "@mui/material";

import ImgHero from "../../public/assets/hero3.svg";
import ImgHero2 from "../../public/assets/hero.svg";
import ImgHero3 from "../../public/assets/hero2.svg";

const featureImages = [
  {
    id: 1,
    // title: 'Image One',
    image: ImgHero,
  },
  {
    id: 2,
    // title: 'Image One',
    image: ImgHero2,
  },
  {
    id: 3,
    // title: 'Image One',
    image: ImgHero3,
  },
];

const Hero = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        animation="fade"
        sx={{
          // marginBottom: "20px",
          width: '100%'
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
    </>
  );
};

export default Hero;
