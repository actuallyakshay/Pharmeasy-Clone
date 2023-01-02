import { Box, Grid } from "@chakra-ui/react";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartData } from "../Redux/Cart/cart.action";
import CartItems from "../Components/Cart/CartItems/CartItems";
import CartTotal from "../Components/Cart/CartTotal/CartTotal";
import Loader from "../organisms/Loader";
import { useSelector } from "react-redux";
import { AppState } from "../Redux/Store";
import { IState } from "../Redux/Cart/cart.reducer";

const Cart: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { cartLoading, cartData } = useSelector(
    (state: AppState) => state.cartReducer
  ) as IState;

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  return cartLoading ? (
    <Loader />
  ) : (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1.5fr 1fr" }}
      gap="10"
      fontFamily={"poppins"}
      w={["100%", "95%", "90%"]}
      m="auto"
      mt="12"
      minH="70vh"
    >
      <CartItems cartData={cartData} />
      <Box display={["none", "flex", "flex"]}>
        <CartTotal cartData={cartData} />
      </Box>
    </Grid>
  );
};

export default Cart;
