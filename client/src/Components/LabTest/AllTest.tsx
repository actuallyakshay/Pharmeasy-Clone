import { useEffect, useState } from "react";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import TestCard from "./TestCard";
import axios from "axios";
import { IProduct } from "../../@types/IProduct";
import NavbarBorderBottom from "../../molecules/NavbarBorderBottom";
import { Link } from "react-router-dom";

const AllTest = () => {
  const [test, setTest] = useState<IProduct[]>([]);
  const getTest = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/product?category=labtest&limit=30`)
      .then((res) => setTest(res.data))
      .catch((error) => console.log("Error", error));
  };
  useEffect(() => {
    getTest();
  }, []);

  return (
    <Box
      w={{ base: "95%", md: "90%", lg: "70%" }}
      m="auto"
      mt={{ base: "3rem", md: "4rem", lg: "5rem" }}
    >
      <Grid gridTemplateColumns={{ base: "1fr", md: "1fr .5fr" }} gap="6rem">
        <Box>
          {test?.map((item, index) => {
            return <TestCard key={index} data={item} />;
          })}
        </Box>
        <Box>
          <Box>
            <Text
              fontSize="16px"
              fontFamily="poppins"
              color="#8897a2"
              fontWeight="500"
            >
              Order Summary
            </Text>
          </Box>
          <NavbarBorderBottom />
          <Box>
            <Text
              fontSize="16px"
              fontFamily="poppins"
              color="#4f585e"
              fontWeight="600"
              mt="1.5rem"
              mb="1rem"
            >
              Please select a test to proceed
            </Text>
          </Box>
          <Link to="/cart">
            <Button
              w="full"
              color="white"
              bg="#10847e"
              _hover={{ backgroundColor: "#10847e" }}
            >
              View Cart
            </Button>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default AllTest;
