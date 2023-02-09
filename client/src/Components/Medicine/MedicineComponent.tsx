import {
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IProduct } from "../../@types/IProduct";

export const MedicineComponent: React.FC<IProduct> = ({
  _id,
  image,
  name,
  company,
  ingredients,
  price1,
  tablet,
}) => {
  const toast = useToast();
  const navigate: NavigateFunction = useNavigate();

  const handleAddToCart = (id: string) => {
    let body = {
      product: id,
      quantity: 1,
    };
    let token: string | null = localStorage.getItem("token");

    if (token == null || undefined) {
      toast({
        title: "Please login first",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    axios
      .post(`${process.env.REACT_APP_URL}/cart`, body, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data == "Type is missing") {
          toast({
            title: "This Product already present in the cart",
            status: "warning",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Product Added Successfully",
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <Grid
      gridTemplateColumns={".5fr 2fr"}
      borderRadius="5px"
      p="2"
      gap="2"
      shadow={"md"}
      fontFamily="poppins"
      cursor={"pointer"}
    >
      <Box h="full" onClick={() => navigate(`/product/${_id}`)}>
        <Image src={image} />
      </Box>
      <Flex flexDirection={"column"} gap="1" align={"start"}>
        <Flex
          w="full"
          align={"top"}
          onClick={() => navigate(`/product/${_id}`)}
        >
          <Text
            fontSize={"14px"}
            letterSpacing=".3px"
            fontWeight={"500"}
            color="blackAlpha.700"
          >
            {name}
          </Text>
          <Box ml="auto">
            <Text
              fontSize={"14px"}
              letterSpacing=".3px"
              fontWeight={"500"}
              color="blackAlpha.700"
            >
              MRP ₹{price1}
            </Text>
          </Box>
        </Flex>
        <HStack onClick={() => navigate(`/product/${_id}`)}>
          <Image src="https://onemg.gumlet.io/w_20,h_20/q_auto,f_auto/rx_icon.png" />
          <Text fontSize={"11px"} color="blackAlpha.700">
            Prescription Required
          </Text>
        </HStack>
        <Text fontSize={"11px"} color="blackAlpha.700">
          {tablet}
        </Text>
        <Text fontSize={"11px"} color="blackAlpha.700">
          {company}
        </Text>
        <Flex w="full">
          <Text
            display="block"
            width={{ base: "100px", md: "150px", lg: "200px" }}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            fontSize={"11px"}
            color="blackAlpha.700"
          >
            {ingredients}
          </Text>
          <Box
            _hover={{ cursor: "pointer" }}
            fontWeight={"500"}
            fontSize="15px"
            color="#10847e"
            ml="auto"
            onClick={() => handleAddToCart(_id)}
          >
            ADD
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default MedicineComponent;
