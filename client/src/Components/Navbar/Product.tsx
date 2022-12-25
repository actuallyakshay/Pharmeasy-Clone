import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IProduct } from "../../@types/IProduct";
import { Link } from "react-router-dom";

interface IProps {
  data: IProduct;
}
const Product: React.FC<IProps> = ({ data }) => {
  return (
    <Flex>
      <Link to={`/product/${data._id}`}>
        <Box
          _hover={{ background: "#eef4ff" }}
          w="100%"
          px="1rem"
          py=".8rem"
          borderRadius={"10px"}
        >
          <Text
            color="#30363c"
            fontSize="14px"
            fontFamily="poppins"
            fontWeight="400"
          >
            {data?.name}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default Product;
