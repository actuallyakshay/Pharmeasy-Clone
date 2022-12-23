import { Box, Grid, Flex, Text, Image } from "@chakra-ui/react";

const OffersTags = () => {
  return (
    <Box w="93%" m="auto" mt="3rem">
      <Grid gridTemplateColumns="1fr 1fr .5fr" columnGap="1.8rem">
        <Box>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/836fef100bc-YAYY550.jpg"
            alt=""
            borderRadius="12px"
            w="auto"
            h="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg"
            alt=""
            borderRadius="12px"
            w="auto"
            h="auto"
          />
        </Box>
      </Grid>
      <Box w="6rem" h="5px" bg="#10847e" mt="1.5rem" borderRadius="10px" />
    </Box>
  );
};

export default OffersTags;
  