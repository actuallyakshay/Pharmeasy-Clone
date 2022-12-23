import { Box, Text } from "@chakra-ui/react";

const ProductHeading = ({ heading }) => {
  return (
    <Text fontSize="24px" fontFamily="poppins" color="#30363c" fontWeight="600">
      {heading}
    </Text>
  );
};

export default ProductHeading;
