import { Box, Button, Divider, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const CartTotal: React.FC = () => {
  return (
    <VStack
      align="start"
      w="full"
      border="1px solid #dfe3e6"
      borderRadius={"10px"}
      h="fit-content"
      pb="2"
      position={"sticky"}
      top="10%"
    >
      <Box px="5" w="full" py="6">
        <Heading fontSize={"20px"} fontWeight="500" letterSpacing={".4px"}>
          Cart Total : 00.00
        </Heading>
      </Box>
      <Divider />
      <Button
        letterSpacing={".3px"}
        fontWeight="500"
        fontSize={"12px"}
        w="90%"
        color="blackAlpha.700"
        size="lg"
        m="4 !important"
      >
        Proceed to checkout
      </Button>
    </VStack>
  );
};

export default CartTotal;
