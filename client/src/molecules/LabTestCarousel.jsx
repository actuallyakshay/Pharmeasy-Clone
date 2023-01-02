import React from "react";

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const LabTestCarousel = ({ data, top }) => {
  const arrowRef = useRef(null);
  const [show, setShow] = useState(false);

  const prevSlide = () => {
    arrowRef.current.slickPrev();
  };
  const nextSlide = () => {
    arrowRef.current.slickNext();
    setShow(true);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box position="relative">
      <Slider {...settings} ref={arrowRef}>
        {data.map((item, el) => {
          return (
            <Box key={el} w="100%">
              <Image src={item} alt="Lab_test" w="100%" h="50%" />
            </Box>
          );
        })}
      </Slider>
      {show > 0 && (
        <Flex
          position="absolute"
          w="2.5rem"
          h="2.5rem"
          bg="#fff"
          cursor="pointer"
          borderRadius="50%"
          top={top}
          left="1%"
          align="center"
          justify="center"
          onClick={prevSlide}
        >
          <IoIosArrowBack color="#000" />
        </Flex>
      )}

      <Flex
        position="absolute"
        w="2.5rem"
        h="2.5rem"
        bg="#fff"
        cursor="pointer"
        borderRadius="50%"
        top={top}
        right="1%"
        align="center"
        justify="center"
        onClick={nextSlide}
      >
        <IoIosArrowForward color="#000" />
      </Flex>
    </Box>
  );
};

export default LabTestCarousel;
