import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface IOffer {
  id: number;
  image: string;
  name: string;
}
const data: IOffer[] = [
  {
    id: 1,
    name: "A 100% money back guarantee",
    image: "https://cms-contents.pharmeasy.in/offer/4fc5e4c1b0b-new.jpg",
  },
  {
    id: 2,
    name: "Buy 2 and Get Extra 5% Off on The Moms Co. Products",
    image: "https://cms-contents.pharmeasy.in/offer/dd04f014369-tmlvkfnvkf.jpg",
  },
  {
    id: 3,
    name: "Flat 10% off on Moov",
    image:
      "https://cms-contents.pharmeasy.in/offer/62154d23477-Dettol_Logo.jpg",
  },
  {
    id: 4,
    name: "Flat 15% off on Dettol",
    image: "https://cms-contents.pharmeasy.in/offer/1d3bd94d655-Durex_Logo.jpg",
  },
  {
    id: 5,
    name: "Flat 20% off on Durex",
    image: "https://cms-contents.pharmeasy.in/offer/d13f1e16d26-Moov_logo.jpg",
  },
];
const OfferForYou: React.FC = () => {
  return (
    <Box
      border="1px dashed  #f3cab1"
      borderRadius="10px"
      w="100%"
      mt="3rem"
      p="1rem"
    >
      <Text
        fontSize="15px"
        fontWeight="500"
        fontFamily="poppins"
        color="#4f585e"
      >
        Offer Just for you
      </Text>

      {data.map(({ id, image, name }) => {
        return (
          <Flex key={id} py=".2rem" align="center">
            <Box w="45px" h="45px" mr="1rem">
              <Image
                src={image}
                alt={name}
                maxW="100%"
                maxH="100%"
                boxSize="auto"
              />
            </Box>
            <Text
              fontSize="12px"
              fontWeight="400"
              fontFamily="poppins"
              color="#4f585e"
            >
              {name}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default OfferForYou;
