import React from "react";

import { Box, Grid, Image } from "@chakra-ui/react";

const OffersTags: React.FC = () => {
  return (
    <Box
      w={{ base: "95%", md: "96%", lg: "93%" }}
      m="auto"
      mt="3rem"
      display={{ base: "none", lg: "block" }}
    >
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr .5fr" }}
        columnGap={{ lg: "1.8rem" }}
      >
        <Box>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/836fef100bc-YAYY550.jpg"
            alt=""
            borderRadius="12px"
            w={{ base: "100%", md: "100%", lg: "auto" }}
            h={{ base: "100%", md: "100%", lg: "auto" }}
          />
        </Box>
        <Box>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg"
            alt=""
            borderRadius="12px"
            w={{ base: "100%", md: "100%", lg: "auto" }}
            h={{ base: "100%", md: "100%", lg: "auto" }}
          />
        </Box>
      </Grid>
      <Box w="6rem" h="5px" bg="#10847e" mt="1.5rem" borderRadius="10px" />
    </Box>
  );
};

export default OffersTags;
