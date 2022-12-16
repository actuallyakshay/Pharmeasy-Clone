import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import MedicineComponent from "./MedicineComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../Redux/Product/product.actions";

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arr = str.split("");

function Medicine() {
  const [temp, setTemp] = useState(0);
  const [alpha, setAlpha] = useState("A");
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.product?.productData);

  useEffect(() => {
    dispatch(getProductData("medicine", alpha));
  }, [alpha]);

  const handleClick = (el, i) => {
    setTemp(i);
    setAlpha(el);
  };

  return (
    <>
      <Box w="full" p="2" border="1px solid black">
        <Text
          fontWeight={"400"}
          letterSpacing={".4px"}
          color="blackAlpha.700"
          fontSize={"20px"}
        >
          Medicine Index starting with - {alpha}
        </Text>
      </Box>
      <HStack
        py="3"
        w="full"
        justifyContent={"space-evenly"}
        mt="3"
        shadow={"md"}
      >
        {arr?.map((el, i) => {
          return (
            <Flex
              key={i}
              justifyContent={"center"}
              alignItems="center"
              w="35px"
              h="35px"
              border="2px solid #10847e"
              bg={temp == i ? "#10847e" : "white"}
              color={temp == i ? "white" : "#10847e"}
              _hover={{ cursor: "pointer" }}
              onClick={() => handleClick(el, i)}
              fontWeight="500"
              borderRadius={"2px"}
            >
              {el}
            </Flex>
          );
        })}
      </HStack>
      <Text
        as="kbd"
        fontWeight={"400"}
        color="blackAlpha.700"
        fontSize={"12px"}
      >
        Showing 1-30 of 30186 results
      </Text>
      <Grid
        fontFamily={"poppins"}
        gridTemplateColumns={"repeat(3,1fr)"}
        w="full"
        gap="3"
        rowGap={6}
      >
        {productData?.map((el, i) => {
          return <MedicineComponent {...el} key={el._id} />;
        })}
      </Grid>
    </>
  );
}

export default Medicine;
