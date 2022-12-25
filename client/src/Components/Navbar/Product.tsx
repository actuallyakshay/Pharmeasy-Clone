import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IProduct } from "../../@types/IProduct";

interface IProps {
  data: IProduct;
}

const Product: React.FC<IProps> = ({ data }) => {
  return (
    <Flex>
      <Box>
        <Image src={data?.image} />
      </Box>
      <Box>
        <Text color="" fontSize="" fontFamily="" fontWeight="">
          {data?.name}
        </Text>
      </Box>
    </Flex>
  );
};

export default Product;