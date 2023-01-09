import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import "../../../index.css";
import QuantityButton from "./QuantityButton";
import { ICart } from "../../../@types/ICart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getCartData } from "../../../Redux/Cart/cart.action";
import Temp from "./Temp";

const month: string[] = [
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();

// get month
let m = d.getMonth();
let currentMonth = month[m - 1];

// get day
let date = d.getDate();
let futureDate = d.getDate() + 4;

interface IProps {
  data: ICart;
}

var token: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E3ZGRlMzUyOGUyMzQ5YzZmZGJhYjYiLCJwaG9uZU51bWJlciI6ODA4MCwiaWF0IjoxNjcxOTc3MDg0fQ.LlIvWL8LQ2vhae7n0S_rMbcwgU2usmk8IRo2I67iQT0";

const CartSingleProduct: React.FC<IProps> = ({ data }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const hanldeDeleteInCart = (id: string) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/cart/${id}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getCartData());
      })
      .catch((e) => console.log(e));
  };

  return (
    <Grid
      gridTemplateColumns=".3fr 1fr"
      w="full"
      px="3"
      gap={{ base: "2fr", md: "2.5rem", lg: "3rem" }}
      pb="3"
    >
      <Flex
        borderRadius="5px"
        w="100%"
        align="center"
        justify="center"
        h="23vh"
        p="3"
      >
        <Image
          src={data.product?.image}
          alt="x-x"
          boxSize="auto"
          maxW="100%"
          maxH="100%"
        />
      </Flex>
      <Box>
        <VStack w="full" align={"start"} direction={"column"}>
          <HStack w="full" justifyContent={"space-between"}>
            <Text color="#4f585e" fontSize="14px" fontWeight="400">
              {data?.product?.name}
            </Text>
            <Box
              onClick={() => hanldeDeleteInCart(data?._id)}
              pr="2"
              cursor={"pointer"}
              _hover={{ color: "#f1474a" }}
            >
              <AiFillDelete fontSize={"20px"} />
            </Box>
          </HStack>
          <Text color="#10847e" fontSize="11px" fontWeight="400">
            Visit PHARMAEAST store
          </Text>
          <HStack align="center">
            <Text
              color="#4f585e"
              fontSize="14px"
              fontWeight="500"
              fontFamily="poppins"
            >
              ₹ {data?.product?.price1}
            </Text>
            <Text
              color="#10847e"
              fontSize="14px"
              fontWeight="400"
              fontFamily="poppins"
            >
              MRP
              <span style={{ marginLeft: "3px" }}>
                <del> {data?.product?.price2}</del>
              </span>
            </Text>
            <Text
              className="off"
              color="white"
              fontSize="10px"
              fontWeight="500"
              fontFamily="poppins"
            >
              {data?.product?.off}% off
            </Text>
          </HStack>
          <HStack w="full" justifyContent={"space-between"}>
            <Text
              color="#10847e"
              fontSize="11px"
              fontWeight="300"
              fontFamily="poppins"
            >
              Inclusive of all taxes
            </Text>
            <QuantityButton quantity={data?.quantity} id={data?.product._id} />
          </HStack>
          <Text
            color="#4f585e"
            fontSize="12px"
            fontWeight="400"
            fontFamily="poppins"
          >
            ⚡ Delivery By{" "}
            <span style={{ color: "#4f585e", fontWeight: "500" }}>
              <Temp />
            </span>
          </Text>
        </VStack>
      </Box>
    </Grid>
  );
};

export default CartSingleProduct;
