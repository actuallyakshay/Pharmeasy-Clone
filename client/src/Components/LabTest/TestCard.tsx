import React from "react";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";

const TestCard: React.FC = () => {
  return (
    <Box p="1.5rem" border="1px solid #dfe3e6" borderRadius="10px" mb="1rem">
      <Grid
        gridTemplateColumns={{ base: "1fr", md: ".1fr 1fr .3fr" }}
        justifyContent={{ base: "center", md: "unset" }}
      >
        <Flex>
          <Image
            src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
            alt=""
            w="30px"
            h="30px"
          />
        </Flex>
        <Box pl=".2rem">
          <Flex gap=".5rem">
            <Text
              fontSize="16px"
              fontFamily="poppins"
              color="#4f585e"
              fontWeight="600"
            >
              Cardiac Risk Markers
            </Text>
          </Flex>
          <Box pt="1rem">
            <Flex w="270px" p=".8rem" bg="#f2fff8" borderRadius="5px">
              <Text
                fontSize="12px"
                fontFamily="poppins"
                color="#10847E"
                fontWeight="600"
              >
                Included 5 tests
              </Text>
              <Text
                fontSize="12px"
                fontFamily="poppins"
                color="#10847E"
                fontWeight="600"
                ml="auto"
              >
                Show all
              </Text>
            </Flex>
            <Flex gap=".3rem" align="center" pt="1rem">
              <FaRupeeSign color="#4f585e" fontSize="15px" />
              <Text
                fontSize="16px"
                fontFamily="poppins"
                color="#4f585e"
                fontWeight="600"
                ml="-.4rem"
              >
                <span>300</span>
              </Text>
              <Text
                fontSize="12px"
                fontFamily="poppins"
                color="#10847E"
                fontWeight="500"
              >
                onwards
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Button w="full" color="white" bg="#10847e">
            Select
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default TestCard;
