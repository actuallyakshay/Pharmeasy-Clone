import React, { Dispatch, useEffect, useState } from "react";
import {
  Box,
  Flex,
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

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const product: IProduct[] | undefined = useSelector(
    (store: AppState) => store?.SearchReducer?.productData
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (input.length > 0) {
      dispatch(getProduct(input));
    }
  }, [input]);

  return (
    <Box pt="2.8rem" w="auto">
      <Flex direction="column" w="60%" m="auto">
        <Flex
          mt="1.3rem"
          borderRadius="30px"
          direction="column"
          position="relative"
        >
          <InputGroup
            size="lg"
            boxShadow="rgb(0 0 0 / 8%) 0px 4px 7px"
            borderRadius="30px"
          >
            <InputLeftElement width="4.5rem" pr="2rem" pl="1rem">
              <FiSearch color="#aaafb3" fontSize="" />
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
                fontSize="17px"
                fontWeight="600"
                borderRadius="30px"
                px="2.5rem"
                mr="1.3rem"
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
              px={{ lg: ".4rem" }}
              zIndex={100}
            >
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
