import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CartTotal from "../CartTotal/CartTotal";
import CartSingleProduct from "./CartSingleProduct";
import DeliverPinCode from "./DeliverPinCode";
import ItemsCount from "./ItemsCount";

const arr: Array<number> = [1, 2, 3];

const CartItems: React.FC = () => {
  return (
    <>
      <Box display={["flex", "none", "none"]}>
        <CartTotal />
      </Box>
      <VStack
        borderRadius={"10px"}
        align="start"
        gap="0"
        w="full"
        border="1px solid #dfe3e6"
      >
        <ItemsCount />
        <Divider />
        <DeliverPinCode />
        <Divider />
        {arr.map((el: number, i: number) => {
          return (
            <Box key={i} w="full">
              <CartSingleProduct />
              <Divider />
            </Box>
          );
        })}
      </VStack>
    </>
  );
};

export default CartItems;
