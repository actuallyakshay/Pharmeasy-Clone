import React from "react";
import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";

import ProductHeading from "../../molecules/ProductHeading";

import CommanCarousel from "../../molecules/CommanCarousel";

const data: Array<string> = [
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

const LabTests: React.FC = () => {
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
      <CommanCarousel
        data={data}
        slidesToShow={7}
        top="38%"
        autoplay={"autoplay"}
      />
    </Box>
  );
};

export default LabTests;
