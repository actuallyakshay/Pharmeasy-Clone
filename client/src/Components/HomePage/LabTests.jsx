import { Box, Flex, Text, Image, Grid, Button } from "@chakra-ui/react";
import ProductHeading from "../../molecules/ProductHeading";
// import { useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CommanCarousel from "../../molecules/CommanCarousel";

const data = [
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5479c6c0c-Vitamins.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/64444851b5e-BoneHealth.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/94616a36a9a-Lifestyle.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/a953829ca96-Heart.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6e78a241e48-CovidCare.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0",
  "https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0",
];

const LabTests = () => {
  // const arrowRef = useRef(null);
  // const [show, setShow] = useState(false);

  // const prevSlide = () => {
  //   arrowRef.current.slickPrev();
  // };
  // const nextSlide = () => {
  //   arrowRef.current.slickNext();
  //   setShow(true);
  // };

  // console.log("arrowRef", arrowRef);
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <Box w="93%" m="auto" mt="3rem" h="20rem">
      <Grid mb="2rem">
        <Box>
          <ProductHeading heading="Lab Tests by Health Concern" />
        </Box>
        <Flex>
          <Text
            fontSize="15px"
            fontFamily="poppins"
            color="#6d777e"
            fontWeight="400"
            mr=".5rem"
          >
            Powered by
          </Text>
          <Image
            src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
            alt=""
            w="auto"
            h="1.2rem"
          />
        </Flex>
      </Grid>

      {/* slider */}

      <CommanCarousel data={data} slidesToShow={7} top="38%" />

      {/* <Box position="relative">
        <Slider {...settings} ref={arrowRef}>
          {data.map((item, el) => {
            return (
              <Box w="100%" pr="1.5rem">
                <Image src={item} alt="Lab_test" w="15rem" h="100%" />
              </Box>
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
            top="38%"
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
          top="38%"
          right="0%"
          align="center"
          justify="center"
          onClick={nextSlide}
        >
          <IoIosArrowForward color="#ffff" />
        </Flex>
      </Box> */}
    </Box>
  );
};

export default LabTests;
