import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const QuantityButton: React.FC = () => {
  return (
    <HStack mt={{ base: "0 !important", md: "-10 !important" }}>
      <Button
        borderRadius={"50%"}
        color="white"
        colorScheme={"teal"}
        size={["xs", "sm", "sm"]}
      >
        -
      </Button>
      <Button size={["xs", "sm", "sm"]} borderRadius={"50%"}>
        1
      </Button>
      <Button
        borderRadius={"50%"}
        color="white"
        colorScheme={"teal"}
        size={["xs", "sm", "sm"]}
      >
        +
      </Button>
    </HStack>
  );
};

export default QuantityButton;
