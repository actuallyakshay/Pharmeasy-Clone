import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";

interface IProps {
  page: number;
  handlePage: Function;
}

const Pegination: React.FC<IProps> = ({ page, handlePage }) => {
  return (
    <HStack justifyContent={"center"} w="100%" m="auto">
      <Button
        disabled={page === 1 ? true : false}
        borderRadius={"none"}
        colorScheme="teal"
        border="1px solid teal"
        onClick={() => handlePage(-1)}
      >
        Prev
      </Button>
      <Button borderRadius={"none"} variant="ghost" border="1px dashed teal">
        {page}
      </Button>
      <Button
        onClick={() => handlePage(1)}
        borderRadius={"none"}
        colorScheme="teal"
        border="1px solid teal"
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pegination;
