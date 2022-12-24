import React from "react";

import { Box, Text } from "@chakra-ui/react";

interface IProps {
  heading: string;
}

const ProductHeading: React.FC<IProps> = ({ heading }) => {
  return (
    <Text fontSize="24px" fontFamily="poppins" color="#30363c" fontWeight="600">
      {heading}
    </Text>
  );
};

export default ProductHeading;
