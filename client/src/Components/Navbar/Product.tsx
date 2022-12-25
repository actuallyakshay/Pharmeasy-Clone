import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { IProduct } from "../../@types/IProduct";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

interface IProps {
  data: IProduct;
}
const Product: React.FC<IProps> = ({ data }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <HStack
      px="1rem"
      justifyContent={"space-between"}
      _hover={{ background: "#eef4ff" }}
      cursor="pointer"
      onClick={() => navigate(`/product/${data._id}`)}
    >
      <Box w="100%" py=".8rem" borderRadius={"10px"}>
        <Text
          color="#30363c"
          fontSize="14px"
          fontFamily="poppins"
          fontWeight="400"
        >
          {data?.name}
        </Text>
      </Box>
      <Box _hover={{ color: "red" }}>
        <FaEye />
      </Box>
    </HStack>
  );
};

export default Product;
