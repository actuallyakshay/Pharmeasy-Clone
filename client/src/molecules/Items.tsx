import { Text } from "@chakra-ui/react";
import React from "react";

  interface IProps {
    items: string;
  }

const Items: React.FC<IProps> = ({ items }) => {
  return (
    <Text fontSize="14px" fontFamily="Poppins" fontWeight="500" color="#30363c">
      {items}
    </Text>
  );
};

export default Items;
