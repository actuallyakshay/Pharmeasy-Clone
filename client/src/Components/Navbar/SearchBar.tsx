import React, { Dispatch, useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getProduct } from "../../Redux/SearchProduct/search.action";
import { useSelector } from "react-redux";
import { IProduct } from "../../@types/IProduct";
import { AppState } from "../../Redux/Store";
import Product from "./Product";

interface IProps {
  pt: string;
  w: string;
  width: string;
  mt: string;
  buttonSize: string;
  inputSize: string;
}

const SearchBar: React.FC<IProps> = ({
  pt,
  w,
  width,
  mt,
  buttonSize,
  inputSize,
}) => {
  const [input, setInput] = useState<string>("");
  const previousValue = useRef<string | null>(null);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  const product: IProduct[] | undefined = useSelector(
    (store: AppState) => store?.SearchReducer?.productData
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    previousValue.current = input;
  }, [input]);

  useEffect(() => {
    if (input.length > 0) {
      dispatch(getProduct(input));
    }
  }, [input]);

  return (
    <Box pt={pt} w={w}>
      <Flex
        direction="column"
        w={{ base: "95%", md: "90%", lg: width }}
        m="auto"
      >
        <Flex
          mt={mt}
          borderRadius="30px"
          direction="column"
          position="relative"
        >
          <InputGroup
            size={inputSize}
            boxShadow="rgb(0 0 0 / 8%) 0px 4px 7px"
            borderRadius="30px"
          >
            <InputLeftElement width="4.5rem" pr="2rem" pl="1rem">
              <FiSearch color="#aaafb3" />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search for"
              borderRadius="30px"
              fontSize="15px"
              color="#aaafb3"
              value={input}
              onChange={handleChange}
              _focus={{ border: "none", outline: "none" }}
            />
            <InputRightElement width="4.5rem">
              <Button
                bg="rgba(16, 132, 126, 1)"
                color="white"
                fontSize="16px"
                fontWeight="500"
                borderRadius="30px"
                px="2.5rem"
                mr="1.3rem"
                size={buttonSize}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          {input.length > 0 && (
            <Box
              top="100%"
              position="absolute"
              h="25rem"
              overflow="auto"
              bg="white"
              w="100%"
              borderRadius="30px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              zIndex={100}
              p="1rem"
            >
              <Flex bg="#eef4ff" px="1rem" align={"center"} mb="1rem">
                <Text
                  color="#4f585e"
                  fontSize="12px"
                  fontWeight="400"
                  fontFamily="poppins"
                  py=".5rem"
                  borderRadius="10px"
                >
                  {`Recently Searched : ${
                    previousValue !== null && previousValue.current
                  }`}
                </Text>
              </Flex>
              {product?.map((item: IProduct, index: number) => {
                return <Product key={index} data={item} />;
              })}
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchBar;
