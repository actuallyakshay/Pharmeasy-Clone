import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader: React.FC = () => {
  return (
    <Flex w="full" h="100vh" justify={"center"} align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
        size="xl"
      />
    </Flex>
  );
};

export default Loader;
