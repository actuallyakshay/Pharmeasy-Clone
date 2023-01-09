import React from "react";
import { Box, Grid, Flex, Image, Text, Button } from "@chakra-ui/react";
import NavbarBorderBottom from "./NavbarBorderBottom";
import { IProduct } from "../@types/IProduct";
import { BiRupee } from "react-icons/bi";
import Ratings from "./Ratings";
import Temp from "../Components/Cart/CartItems/Temp";

interface IProps {
  product: IProduct;
}

const month: string[] = [
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();

// get month
let m = d.getMonth();
let currentMonth = month[m - 1];

// get day
let date = d.getDate();
let futureDate = d.getDate() + 4;

const SingleProduct: React.FC<IProps> = ({ product }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: ".5fr 1fr" }}
      gap={{ base: "2fr", md: "2.5rem", lg: "3rem" }}
    >
      <Flex
        border="1px solid #dfe3e6"
        borderRadius="5px"
        w="100%"
        align="center"
        justify="center"
        h="270px"
      >
        <Image
          src={product?.image}
          alt={product?.name}
          boxSize="auto"
          maxW="100%"
          maxH="70%"
        />
      </Flex>
      <Box>
        <Flex direction={"column"}>
          <Text
            color="#4f585e"
            fontSize="20px"
            fontWeight="600"
            fontFamily="poppins"
            mb=".5rem"
          >
            {product?.name}
          </Text>
          <Text
            color="#10847e"
            fontSize="14px"
            fontWeight="400"
            fontFamily="poppins"
            mb=".5rem"
          >
            Visit PHARMAEAST store
          </Text>
          <Flex align="center">
            <Flex align="center">
              <BiRupee color="#4f585e" fontSize="24px" fontWeight="800" />
              <Text
                color="#4f585e"
                fontSize="20px"
                fontWeight="600"
                fontFamily="poppins"
                mr=".5rem"
                ml="-.3rem"
              >
                {product?.price1}
              </Text>
            </Flex>
            <Flex>
              <Text
                color="#10847e"
                fontSize="15px"
                fontWeight="400"
                fontFamily="poppins"
                mr="0rem"
              >
                MRP
                <span style={{ marginLeft: "3px" }}>
                  <del> {product?.price2}</del>
                </span>
              </Text>
            </Flex>
            <Box ml="auto">
              <Button bg="#10847e" color="white" _hover={{ bg: "#10847e" }}>
                Add To Cart
              </Button>
            </Box>
          </Flex>
          <Text
            color="#10847e"
            fontSize="11px"
            fontWeight="300"
            fontFamily="poppins"
          >
            Inclusive of all taxes
          </Text>
          <Text
            color="#4f585e"
            fontSize="12px"
            fontWeight="400"
            fontFamily="poppins"
            mb=".5rem"
          >
            Delivery By <Temp />
          </Text>
        </Flex>

        <NavbarBorderBottom />
        <Ratings id={product._id} />
      </Box>
    </Grid>
  );
};

export default SingleProduct;
