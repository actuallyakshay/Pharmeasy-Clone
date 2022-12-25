import { Box, Divider, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ICart } from "../../../@types/ICart";
import CartTotal from "../CartTotal/CartTotal";
import CartSingleProduct from "./CartSingleProduct";
import DeliverPinCode from "./DeliverPinCode";
import ItemsCount from "./ItemsCount";

interface IProps {
  cartData: ICart[];
}

const CartItems: React.FC<IProps> = ({ cartData }) => {
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
        {cartData?.length === 0 ? (
          <Flex
            gap="3"
            direction={"column"}
            w="full"
            h={"full"}
            justify={"center"}
            align="center"
          >
            <Image
              src="https://assets.pharmeasy.in/web-assets/images/emptyCart.png"
              alt="x-x"
              w="20%"
            />
            <Text
              fontSize={"14px"}
              fontWeight="500"
              letterSpacing={".4px"}
              color="blackAlpha.600"
            >
              Your Medicine/Healthcare cart is empty!
            </Text>
          </Flex>
        ) : (
          cartData?.map((el: ICart, i: number) => {
            return (
              <Box key={el._id} w="full">
                <CartSingleProduct data={el} />
                <Divider />
              </Box>
            );
          })
        )}
      </VStack>
    </>
  );
};

export default CartItems;
