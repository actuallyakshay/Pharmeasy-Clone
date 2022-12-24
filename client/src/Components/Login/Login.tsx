import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
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
} from "@chakra-ui/react";

const Login: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box zIndex={40}>
      <Text
        fontFamily="Poppins"
        fontWeight="500"
        fontSize="14px"
        color="#0d5853"
        ml=".5rem"
        onClick={onOpen}
        _hover={{ borderBottom: "1px dotted black" }}
      >
        Hello, Log in
      </Text>
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
                Quick login/Register
              </Heading>
              <Input
                focusBorderColor="#10847e"
                size="lg"
                _focus={{ color: "none" }}
                type="number"
                borderRadius={"10px"}
                outline="1px solid #10847e"
                placeholder="Enter your phone number"
                _placeholder={{ fontSize: "15px" }}
              />
              <Button
                fontWeight={"400"}
                w="full"
                fontSize={"16px"}
                letterSpacing=".5px"
                colorScheme={"teal"}
                size="lg"
              >
                Send OTP
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

export default Login;
