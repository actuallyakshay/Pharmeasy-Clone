import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import TestCard from "./TestCard";

const HealthCarePackages = () => {
  return (
    <Box
      w={{ base: "95%", md: "90%", lg: "70%" }}
      m="auto"
      mt={{ base: "3rem", md: "4rem", lg: "5rem" }}
    >
      <Grid gridTemplateColumns="1fr .7fr" gap="4rem">
        <Box>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return <TestCard />;
          })}
        </Box>
        <Box>right</Box>
      </Grid>
    </Box>
  );
};

export default HealthCarePackages;
