import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import React, { Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IProduct } from "../../@types/IProduct";
import { getProductData } from "../../Redux/Product/product.action";
import { AppState } from "../../Redux/Store";
import MedicineComponent from "./MedicineComponent";

const str: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arr: Array<string> = str.split("");

export const Medicine: React.FC = () => {
  const [temp, setTemp] = useState<number>(0);
  const [alpha, setAlpha] = useState<string>("A");
  const dispatch: Dispatch<any> = useDispatch();
  const productData: IProduct[] | undefined = useSelector(
    (state: AppState) => state?.productReducer?.productData
  );

  useEffect(() => {
    dispatch(getProductData("medicine", alpha));
  }, [alpha]);

  const handleClick = (el: string, i: number) => {
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
        flexWrap="wrap"
        gap={["5px", "0px"]}
      >
        {arr?.map((el: string, i: number) => {
          return (
            <Flex
              key={el + i}
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
              p={{ base: "18px", lg: "0" }}
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
        Showing 1-30 of 819 results
      </Text>
      <Grid
        fontFamily={"poppins"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        w="full"
        gap="3"
        rowGap={[3, 3, 5, 6]}
      >
        {productData?.map((el: IProduct, i: number) => {
          return <MedicineComponent {...el} key={el._id} />;
        })}
      </Grid>
    </>
  );
};
