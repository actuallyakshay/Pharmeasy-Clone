import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IProduct } from "../../@types/IProduct";
import "../../index.css";
import { addDataInCart } from "../../Redux/Cart/cart.action";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IProps {
  data: IProduct;
}

const SingleProduct: React.FC<IProps> = ({ data }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const toast = useToast();
  const navigate: NavigateFunction = useNavigate();

  const handleAddToCart = (id: string) => {
    let body = {
      product: id,
      quantity: 1,
    };
    dispatch(addDataInCart(body));
    toast({
      title: "Product Added Successfully",
      status: "success",
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack
      position={"relative"}
      cursor={"pointer"}
      align={"start"}
      border="1px solid #e9e9ea"
      _hover={{ border: "1px solid teal" }}
      borderRadius={"8px"}
      pb="2"
    >
      <Box
        right="2%"
        _hover={{
          transform: "scale(1.2)",
          transformOrigin: "50% 50%",
          cursor: "pointer",
          opacity: ".9",
        }}
        transition="transform .3s"
        top="2%"
        position={"absolute"}
        zIndex="20"
      >
        <BsHeart size="30px" />
      </Box>
      <Flex
        h="35vh"
        w="full"
        justifyContent={"center"}
        alignItems="center"
        overflow={"hidden"}
        onClick={() => navigate(`/product/${data._id}`)}
      >
        <Image
          src={data.image}
          boxSize="auto"
          maxW="100%"
          maxH="100%"
          _hover={{
            transform: "scale(1.1)",
            transformOrigin: "50% 50%",
            cursor: "pointer",
            opacity: ".9",
          }}
          transition="transform .4s"
        />
      </Flex>
      <Heading
        color="blackAlpha.700"
        fontWeight={"500"}
        letterSpacing=".3px"
        px="5"
        fontSize={"15px"}
        lineHeight="22px"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        w="230px"
      >
        {data?.name}
      </Heading>
      <HStack justifyContent={"space-between"} w="full" align="start" px="5">
        <HStack
          fontSize={"14px"}
          color="blackAlpha.600"
          fontWeight={"semibold"}
        >
          <Text>MRP</Text>
          <Text as="del">₹{data.price2}.00</Text>
        </HStack>
        <Box className="off">{data.off}% Off</Box>
      </HStack>
      <HStack px="5" w="full" justifyContent={"space-between"}>
        <Text fontWeight={"500"} color="teal" letterSpacing={".5px"}>
          {" "}
          ₹{data.price1}.00
        </Text>
        <Box
          _hover={{ cursor: "pointer" }}
          fontWeight={"500"}
          fontSize="15px"
          color="#10847e"
          onClick={() => handleAddToCart(data?._id)}
        >
          ADD +
        </Box>
      </HStack>
    </VStack>
  );
};

export default SingleProduct;
