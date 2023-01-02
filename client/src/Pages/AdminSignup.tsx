import { Box, Grid, Image, VStack } from "@chakra-ui/react";
import React from "react";

const AdminSignup: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns={"repeat(2,1fr)"}
      w="full"
      h="100vh"
      position={"relative"}
      border={"1px solid red"}
    >
      <Image
        position={"absolute"}
        opacity=".5"
        src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
      />
      <VStack border={"1px solid blue"} justify="center" align={"center"}>
        <Image
          src="https://user-images.githubusercontent.com/107462720/210163521-f6d5785c-9ca8-467b-8ceb-2d2a343f17bc.png"
          width={"80%"}
        />
      </VStack>
      <Box border={"1px solid blue"}></Box>
    </Grid>
  );
};

export default AdminSignup;
