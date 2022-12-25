import React from "react";

import { Box, Text, Grid, Image } from "@chakra-ui/react";
import ProductHeading from "../../molecules/ProductHeading";

interface IData {
  src: string;
  link: string;
  title: string;
}

const data: IData[] = [
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0",
    link: "",
    title: "Skin Care",
  },
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0",
    link: "",
    title: "Vitamins & Supplements",
  },
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0",
    link: "",
    title: "Diabetes Care & Sugar...",
  },
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0",
    link: "",
    title: "Cardiac Care",
  },
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0",
    link: "",
    title: "Baby & Mom Care",
  },
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0",
    link: "",
    title: "Covid Care",
  },
  {
    src: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0",
    link: "",
    title: "Lifestyle Disorders",
  },
];

const ShopByConcern: React.FC = () => {
  return (
    <Box w="93%" m="auto" mt="3rem">
      <ProductHeading heading="Shop by Concern" />
      <Text
        mt=".3rem"
        color="#4f585e"
        fontWeight="400"
        fontFamily="poppins"
        fontSize="15px"
        mb="1.5rem"
      >
        Products are handpicked by experts
      </Text>
      <Grid templateColumns="repeat(auto-fill, 120px)" gap="3rem">
        {data.map(({ src, link, title }: IData) => {
          return (
            <Box key={src}>
              <Box>
                <Image src={src} alt="" w="auto" h="auto" />
              </Box>
              <Box mt=".7rem">
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  fontFamily="poppins"
                  color="#30363c"
                  textAlign="center"
                  mt=".3rem"
                >
                  {title}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ShopByConcern;
