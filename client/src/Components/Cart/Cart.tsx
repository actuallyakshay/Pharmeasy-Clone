import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import CartItems from "./CartItems/CartItems";
import CartTotal from "./CartTotal/CartTotal";

const Cart: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1.5fr 1fr" }}
      gap="10"
      fontFamily={"poppins"}
      w={["100%", "95%", "90%"]}
      m="auto"
      mt="12"
    >
      <CartItems />
      <Box display={["none", "flex", "flex"]}>
        <CartTotal />
      </Box>
    </Grid>
  );
};

export default Cart;
