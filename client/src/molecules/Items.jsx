import { Text } from "@chakra-ui/react";
import React from "react";

const Items = ({ items }) => {
  return (
    <Text fontSize="14px" fontFamily="Poppins" fontWeight="500" color="#30363c">
      {items}
    </Text>
  );
};

export default Items;
