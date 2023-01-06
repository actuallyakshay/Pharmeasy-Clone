import React from "react";

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import "../index.css";
import { Link } from "react-router-dom";

const ProductDetailsCarousel = ({ data, slidesToShow, top, bg = "" }) => {
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
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
            <Link to="/product/healthcare">
              <Box w="100%" pr="1.5rem" key={el}>
                <Box>
                  <Flex
                    px="1.2rem"
                    py="2rem"
                    _hover={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      borderRadius: "10px",
                    }}
                    borderRadius="10px"
                    border="1px solid #e6ebf4"
                    justify="center"
                    align="center"
                    w="100%"
                    h="12rem"
                    bg={bg}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      boxSize="auto"
                      maxW="100%"
                      maxH="100%"
                    />
                  </Flex>
                  <Box my="1rem">
                    {/* <Title title={item.title} color="#30363c" center="start" /> */}
                    <Text
                      fontSize="14px"
                      fontWeight="500"
                      fontFamily="poppins"
                      color="#30363c"
                      textAlign="start"
                    >
                      {item.title}
                    </Text>
                  </Box>
                  <Flex mt=".5rem" align="center">
                    <Text
                      color="#8897a2"
                      fontSize="14px"
                      fontWeight="500"
                      fontFamily=""
                      textTransform="uppercase"
                    >
                      mrp
                    </Text>
                    <BiRupee color="#8897a2" />
                    <Text
                      color="#8897a2"
                      fontSize="14px"
                      fontWeight="500"
                      textTransform="uppercase"
                    >
                      {item.mrp}
                    </Text>
                  </Flex>
                  {item.price > 0 ? (
                    <Flex mt=".3rem" align="center">
                      <BiRupee color="#30363c" fontWeight="800" />
                      <Text
                        mt="-.2rem"
                        color="#30363c"
                        fontSize=""
                        fontWeight="700"
                        fontFamily=""
                        textTransform="uppercase"
                        mr=".5rem"
                      >
                        {item?.price}
                      </Text>
                      <Text
                        className="off"
                        color="white"
                        fontSize="9px"
                        fontWeight="500"
                        fontFamily="poppins"
                        textTransform="uppercase"
                      >
                        {item.price > 0 ? `${item.off} % OFF` : " "}
                      </Text>
                    </Flex>
                  ) : (
                    " "
                  )}
                </Box>
              </Box>
            </Link>
          );
        })}
      </Slider>
      {show > 0 && (
        <Flex
          position="absolute"
          w="2.5rem"
          h="2.5rem"
          bg="#30363c"
          cursor="pointer"
          borderRadius="50%"
          top={top}
          left="-1%"
          align="center"
          justify="center"
          onClick={prevSlide}
        >
          <IoIosArrowBack color="#ffff" />
        </Flex>
      )}

      <Flex
        position="absolute"
        w="2.5rem"
        h="2.5rem"
        bg="#30363c"
        cursor="pointer"
        borderRadius="50%"
        top={top}
        right="0%"
        align="center"
        justify="center"
        onClick={nextSlide}
      >
        <IoIosArrowForward color="#ffff" />
      </Flex>
    </Box>
  );
};

export default ProductDetailsCarousel;

// ProductDetailsCarousal
