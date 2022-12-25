import React from "react";
import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import NavbarBorderBottom from "./NavbarBorderBottom";
import { BiRupee } from "react-icons/bi";
import { IProduct } from "../@types/IProduct";
import { Link } from "react-router-dom";

interface IProps {
  data: IProduct[];
}

const SimilerProducts: React.FC<IProps> = ({ data }) => {
  return (
    <Box mt="2rem">
      <NavbarBorderBottom />
      <Box mt="2rem">
        <Text
          fontSize="17px"
          fontWeight="600"
          fontFamily="poppins"
          color="#4f585e"
        >
          Similer Products
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
          gap="1.5rem"
          mt="1rem"
        >
          {data?.map((data, i) => {
            return (
              <Box key={i}>
                <Link to={`/product/${data._id}`}>
                  <Flex
                    border="1px solid #dfe3e6"
                    borderRadius="5px"
                    w="100%"
                    align="center"
                    justify="center"
                    h="160px"
                  >
                    <Image
                      src={data.image}
                      alt=""
                      boxSize="auto"
                      maxW="100%"
                      maxH="70%"
                    />
                  </Flex>
                </Link>
                <Box mt=".5rem">
                  <Text
                    fontSize="15px"
                    fontWeight="500"
                    fontFamily="poppins"
                    color="#4f585e"
                    width={{ base: "300px", md: "300px", lg: "200px" }}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {data.name}
                  </Text>
                  <Text
                    fontSize="13px"
                    fontWeight="400"
                    fontFamily="poppins"
                    color="#4f585e"
                  >
                    MRP
                    <span style={{ marginLeft: "3px" }}>
                      <del> {data.price2}</del>
                    </span>
                  </Text>

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
                      {data?.price1}
                    </Text>
                  </Flex>

                  <Button
                    border="1px solid #10847E"
                    bg="white"
                    px="2rem"
                    mt="1rem"
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default SimilerProducts;
