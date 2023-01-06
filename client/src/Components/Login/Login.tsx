import React, { useState, useEffect } from "react";

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
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { AppState } from "../../Redux/Store";
import { IAuthtypes } from "../../Redux/Auth/auth.type";
import axios from "axios";
import { RiLogoutCircleLine } from "react-icons/ri";
import { getUserLogout } from "../../Redux/Auth/auth.actions";

const Login: React.FC = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [number, setNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const dispatch: Dispatch<any> = useDispatch();
  const { userLoading, userOTP, userAuth } = useSelector(
    (state: AppState) => state?.authReducer
  );

  const handlelogin = () => {
    if (number.length != 10) {
      toast({
        title: `please enter a valid number`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      dispatch({ type: IAuthtypes.GET_USER_LOGIN_LOADING });
      let body = {
        phoneNumber: Number(number),
      };
      axios
        .post(`${process.env.REACT_APP_URL}/user/login`, body)
        .then((res) => {
          dispatch({
            type: IAuthtypes.GET_USER_LOGIN_SUCCESS,
            payload: res.data,
          });
          toast({
            title: `Your OPT is ${res.data.otp}`,
            status: "success",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        })
        .catch((e) => console.log(e));
    }
  };

  const handleVerify = () => {
    if (userOTP == otp) {
      toast({
        title: `Login Successfully`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      onClose();
      window.location.reload();
    } else {
      toast({
        title: `Please enter correct otp`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };
  const handleSignout = () => {
    dispatch(getUserLogout());
  };

  return (
    <Box zIndex={40}>
      <Text
        fontFamily="Poppins"
        fontWeight="500"
        fontSize="14px"
        color="#0d5853"
        ml=".5rem"
        _hover={{ borderBottom: "1px dotted black" }}
      >
        {userAuth ? (
          <RiLogoutCircleLine onClick={handleSignout} fontSize={"20px"} />
        ) : (
          <span onClick={onOpen}>Hello, Log in</span>
        )}
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
                display={userOTP !== "" ? "none" : "flex"}
                _focus={{ color: "none" }}
                type="number"
                borderRadius={"10px"}
                outline="1px solid #10847e"
                placeholder="Enter your phone number"
                _placeholder={{ fontSize: "15px" }}
                onChange={(e) => setNumber(e.target.value)}
              />
              <Input
                focusBorderColor="#10847e"
                size="lg"
                display={userOTP !== "" ? "flex" : "none"}
                _focus={{ color: "none" }}
                type="number"
                borderRadius={"10px"}
                outline="1px solid #10847e"
                placeholder="Enter otp"
                _placeholder={{ fontSize: "15px" }}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button
                fontWeight={"400"}
                w="full"
                fontSize={"16px"}
                letterSpacing=".5px"
                colorScheme={"teal"}
                size="lg"
                isLoading={userLoading ? true : false}
                onClick={
                  userOTP !== "" ? () => handleVerify() : () => handlelogin()
                }
              >
                {userOTP !== "" ? "Verify otp" : "Login/Signup"}
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
