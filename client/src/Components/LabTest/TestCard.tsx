import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import { IProduct } from "../../@types/IProduct";
import { useDispatch } from "react-redux";
import { addDataInCart } from "../../Redux/Cart/cart.action";
import { Dispatch } from "redux";

interface IProps {
  data: IProduct;
}

const TestCard: React.FC<IProps> = ({ data }) => {
  const toast = useToast();
  const dispatch: Dispatch<any> = useDispatch();
  const AddToCart = (id: string) => {
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
    <Box p="1.5rem" border="1px solid #dfe3e6" borderRadius="10px" mb="1rem">
      <Grid
        gridTemplateColumns={{ base: "1fr", md: ".1fr 1fr .3fr" }}
        justifyContent={{ base: "center", md: "unset" }}
      >
        <Flex>
          <Image
            src="https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg"
            alt=""
            w="30px"
            h="30px"
          />
        </Flex>
        <Box pl=".2rem">
          <Flex gap=".5rem">
            <Text
              fontSize="16px"
              fontFamily="poppins"
              color="#4f585e"
              fontWeight="600"
            >
              {data?.name}
            </Text>
          </Flex>
          <Box pt="1rem">
            <Flex w="270px" p=".8rem" bg="#f2fff8" borderRadius="5px">
              <Text
                fontSize="12px"
                fontFamily="poppins"
                color="#10847E"
                fontWeight="600"
              >
                Included 5 tests
              </Text>
              <Text
                fontSize="12px"
                fontFamily="poppins"
                color="#10847E"
                fontWeight="600"
                ml="auto"
              >
                Show all
              </Text>
            </Flex>
            <Flex gap=".3rem" align="center" pt="1rem">
              <FaRupeeSign color="#4f585e" fontSize="15px" />
              <Text
                fontSize="16px"
                fontFamily="poppins"
                color="#4f585e"
                fontWeight="600"
                ml="-.4rem"
              >
                <span> {data?.price1}</span>
              </Text>
              <Text
                fontSize="12px"
                fontFamily="poppins"
                color="#10847E"
                fontWeight="500"
              >
                onwards
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Button
            w="full"
            color="white"
            bg="#10847e"
            _hover={{ backgroundColor: "#10847e" }}
            onClick={() => AddToCart(data?._id)}
          >
            Select
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default TestCard;
