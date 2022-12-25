import { Button, Heading, HStack } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

const ItemsCount :React.FC= () => {
  return (
    <HStack
      px="3"
      py="3"
      w="full"
      justifyContent={"space-between"}
    >
      <Heading fontSize={"20px"} fontWeight="500">
        0 Items in your Cart
      </Heading>
      <Button
        color="teal"
        fontWeight={"500"}
        fontSize="14px"
        leftIcon={<AiOutlineHeart />}
        variant="ghost"
      >
        Saved for letter
      </Button>
    </HStack>
  );
}

export default ItemsCount