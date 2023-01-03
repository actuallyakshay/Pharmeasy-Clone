import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getLogin, IAuthAction } from "../../Redux/Auth/auth.actions";
import { useSelector } from "react-redux";
import { AppState } from "../../Redux/Store";
import { Navigate, useNavigate } from "react-router-dom";

interface IForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });
  const toast = useToast();
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const adminAuth = useSelector(
    (state: AppState) => state?.authReducer?.adminAuth
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (adminAuth) {
    return <Navigate to="/admin/products" />;
  }
  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_URL}/user/login`, form)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("name", res.data.name);
          dispatch(getLogin(true));
          toast({
            title: `Successfully login as ${res.data.role}`,
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: `You are not authorised to login this website`,
            status: "error",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch((e) => {
        toast({
          title: `You are not authorised to login this website`,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Box position={"relative"}>
      <Box position={"absolute"} w="fit-content" opacity={0.7}>
        <Image
          m="auto"
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="90%"
        />
      </Box>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        bgColor="transparent"
        justifyContent={"space-between"}
        py="3"
        px="10"
      >
        <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <Image src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" />
        </Box>
        <HStack>
          <Text
            fontWeight={"500"}
            color="blackAlpha.600"
            display={{ base: "none", md: "flex" }}
          >
            🔐 1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <Grid
        w="80%"
        h="80vh"
        m="auto"
        position="relative"
        gridTemplateColumns={"repeat(2,1fr)"}
      >
        <Flex
          h="full"
          justify={"center"}
          align="center"
          display={["none", "none", "flex", "flex"]}
        >
          <Image
            src="https://user-images.githubusercontent.com/107462720/210164542-7c987ca5-34cf-4658-b302-d626c0e0631e.png"
            w="80%"
            m="auto"
            alignContent={"end"}
          />
        </Flex>
        <Flex align={"center"} justify={"center"} flexDirection="column">
          <Stack spacing={4} w={"full"} maxW={"md"} p={6}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                fontWeight={"600"}
                value={form.email}
                name="email"
                onChange={(e) => handleChange(e)}
                letterSpacing="1px"
                type="text"
                outline="none"
                flex="1"
                border={"none"}
                borderBottom={"1px solid teal"}
                w="full"
                borderRadius={0}
                focusBorderColor="none"
                _hover={{ borderBottom: "1px solid teal" }}
                _placeholder={{
                  opacity: 0.4,
                  color: "gray",
                  letterSpacing: "0",
                  fontWeight: "400",
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                fontWeight={"600"}
                letterSpacing="1px"
                type="password"
                name="password"
                outline="none"
                flex="1"
                border={"none"}
                borderBottom={"1px solid teal"}
                w="full"
                borderRadius={0}
                focusBorderColor="none"
                placeholder="password here !"
                _hover={{ borderBottom: "1px solid teal" }}
                _placeholder={{
                  opacity: 0.4,
                  color: "gray",
                  letterSpacing: "0",
                  fontWeight: "400",
                }}
              />
            </FormControl>

            <Stack spacing={6}>
              <Button
                mt="3"
                bgColor="teal"
                w="full"
                size="md"
                _hover={{ bgColor: "teal" }}
                letterSpacing={"1.3px"}
                fontWeight="500"
                fontSize="16px"
                color="white"
                onClick={() => handleSubmit()}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Grid>
    </Box>
  );
};

export default LoginPage;
