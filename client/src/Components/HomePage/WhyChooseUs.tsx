import React from "react";

import { Box, Text, Grid, Image, Flex } from "@chakra-ui/react";

interface IData {
  src: string;
  count: string;
  duration: string;
  info: string;
}

const data: IData[] = [
  {
    src: "https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0",
    count: "32 Million+",
    duration: "Mar 31, 2022",
    info: "Registered users as of",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0",
    count: "36 Million+",
    duration: "till date ",
    info: "Orders on Pharmeasy",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0",
    count: "99000+",
    duration: "3 months",
    info: "Unique items sold last",
  },
  {
    src: "https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0",
    count: "19500+",
    duration: "3 months",
    info: "Pin codes serviced last",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box w="100%" m="auto" mt="4rem" bg="#f8f9ff">
      <Box
        w="93%"
        m="auto"
        pt="2rem"
        pb={{ base: "2rem", md: "3rem", lg: "4rem" }}
      >
        <Box>
          <Text
            color="#000"
            fontSize="26px"
            fontFamily="Poppins"
            fontWeight="600"
          >
            Why Choose Us?
          </Text>
        </Box>
        <Grid
          mt={{ base: "2rem", md: "3rem", lg: "4rem" }}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
          columnGap={{ md: "2rem", lg: "5rem" }}
          rowGap={{ base: "2rem", lg: "unset" }}
        >
          {data.map((item: IData, index: number) => {
            return (
              <Flex key={index}>
                <Box mr=".5rem">
                  <Image src={item.src} alt={item.info} w="84px" h="84px" />
                </Box>
                <Box>
                  <Text
                    fontSize="22px"
                    fontFamily="Poppins"
                    fontWeight="600"
                    color="#000"
                  >
                    {item.count}
                  </Text>
                  <Text
                    fontSize="16px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    color="#000"
                    mt=".5rem"
                  >
                    {item.info}
                  </Text>
                  <Text
                    fontSize="16px"
                    fontFamily="Poppins"
                    fontWeight="400"
                    color="#000"
                    mt="auto"
                  >
                    {item.duration}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
