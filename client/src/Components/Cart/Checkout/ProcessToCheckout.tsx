import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  useDisclosure,
  Button,
  Input,
  Text,
  Box,
  Flex,
  Image,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ProcessToCheckout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <Box zIndex={40} w="full">
      <Button
        letterSpacing={".3px"}
        fontWeight="500"
        fontSize={"12px"}
        w="90%"
        color="blackAlpha.700"
        size="lg"
        m="4 !important"
        onClick={onOpen}
      >
        Proceed to checkout
      </Button>
      <Drawer size={"sm"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Box position="absolute" left="12px" top="4%">
            <DrawerCloseButton
              bg="teal"
              borderRadius={"0"}
              color={"white"}
              fontSize="15px"
              p="7"
            />
          </Box>
          <DrawerHeader px="0" pt="0">
            <Flex
              justifyContent={"space-between"}
              //   h="20vh"
              pt="8"
              bg="teal"
              w="full"
              px="8"
            >
              <Box>
                <Image
                  src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=360x0"
                  alt="x-x"
                  w="70%"
                />
              </Box>
              <Box>
                <Image
                  src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=360x0"
                  alt="x-x"
                  w="150px"
                />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack fontFamily={"poppins"} gap="2" align="start">
              <Heading
                size="sm"
                fontWeight={"500"}
                letterSpacing=".4px"
                color={"blackAlpha.800"}
              >
                Add Address
              </Heading>
              {inputArr.map((el: string, i: number) => {
                return (
                  <Input
                    focusBorderColor="#10847e"
                    size="lg"
                    _focus={{ color: "none" }}
                    type="text"
                    fontSize={"14px"}
                    borderRadius={"10px"}
                    outline="1px solid #10847e"
                    placeholder={el}
                    _placeholder={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#ababab",
                    }}
                  />
                );
              })}
              <Button
                fontWeight={"400"}
                w="full"
                fontSize={"16px"}
                letterSpacing=".5px"
                colorScheme={"teal"}
                size="lg"
                onClick={() => {
                  toast({
                    title: "Hey ! We'll deliver this within 7 days !",
                    description: "Happy Shopping !",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                }}
              >
                <Link to="/">Save and continue</Link>
              </Button>
              <Flex justifyContent={"center"} w="full">
                <Text cursor={"pointer"} fontSize={"12px"} textAlign="center">
                  By clicking continue, you agree with our{" "}
                  <span style={{ color: "teal" }}>Privacy Policy</span>{" "}
                </Text>
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ProcessToCheckout;

const inputArr: Array<string> = [
  "Deliver to",
  "Mobile number",
  "pincode",
  "House no. and building",
  "Street name",
];
