import { useEffect, useState } from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import TestCard from "./TestCard";
import { IProduct } from "../../@types/IProduct";
import axios from "axios";
import NavbarBorderBottom from "../../molecules/NavbarBorderBottom";
import { Link } from "react-router-dom";

const HealthCarePackages = () => {
  const [test, setTest] = useState<IProduct[]>([]);
  const getTest = () => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/product?category=healthPackages&limit=30`
      )
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
      <Grid gridTemplateColumns="1fr .7fr" gap="4rem">
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
              color="#4f585e"
              fontWeight="600"
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
            <Button w="full" color="white" bg="#10847e">
              View Cart
            </Button>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};

export default HealthCarePackages;
