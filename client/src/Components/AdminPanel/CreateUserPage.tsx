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
  InputGroup,
  InputLeftElement,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsShieldLockFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

interface IForm {
  name: string;
  email: string;
  password: string;
  role: string;
}

const CreateUser: React.FC = () => {
  const toast = useToast();
  const [signupform, setForm] = useState<IForm>({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSignupForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({ ...signupform, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Box position={"absolute"} w="fit-content" opacity={0.5} zIndex={-1}>
        <Image
          m="auto"
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="100%"
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
        <Box>
          <Link to="/">
            <Image
              src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
              w="90%"
            />
          </Link>
        </Box>
        <HStack>
          <BsShieldLockFill color="green" fontSize={"30px"} />
          <Text
            fontWeight={"500"}
            color="blackAlpha.600"
            display={{ base: "none", md: "flex" }}
          >
            1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <Grid
        w="80%"
        m="auto"
        position="relative"
        gridTemplateColumns={"repeat(2,1fr)"}
        // gap=""
      >
        <Flex h="full" display={["none", "none", "flex", "flex"]}>
          <Image
            src="https://user-images.githubusercontent.com/107462720/210168012-59f6b109-27ab-4bdf-9893-0d8fa4c57b8b.png"
            w="90%"
            m="auto"
            alignContent={"end"}
            opacity=".96"
          />
        </Flex>
        <VStack alignItems="flex-start">
          <Flex
            flexDirection={"column"}
            w={["95%", "75%", "75%", "65%"]}
            gap="3"
            mx="auto"
            mt="10"
          >
            <FormControl isRequired>
              <FormLabel mb="0">Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={signupform.name}
                  onChange={(e) => handleSignupForm(e)}
                  fontWeight={"400"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid teal"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter your name"
                  _hover={{ borderBottom: "1px solid teal" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "300",
                  }}
                  name="name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0">Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={signupform.email}
                  onChange={(e) => handleSignupForm(e)}
                  fontWeight={"400"}
                  letterSpacing="1px"
                  type="text"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid teal"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="your-email@example.com"
                  _hover={{ borderBottom: "1px solid teal" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "300",
                  }}
                  name="email"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mb="0">Password</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  value={signupform.password}
                  onChange={(e) => handleSignupForm(e)}
                  fontWeight={"400"}
                  letterSpacing="1px"
                  type="password"
                  outline="none"
                  flex="1"
                  border={"none"}
                  borderBottom={"1px solid teal"}
                  w="full"
                  borderRadius={0}
                  focusBorderColor="none"
                  placeholder="Enter your name"
                  _hover={{ borderBottom: "1px solid teal" }}
                  _placeholder={{
                    opacity: 0.4,
                    color: "gray",
                    letterSpacing: "0",
                    fontWeight: "300",
                  }}
                  name="password"
                />
              </InputGroup>
            </FormControl>
            <Select
              name="role"
              onChange={(e) => handleSignupForm(e)}
              placeholder="Select role"
            >
              <option value="ProductManager">Product Manager</option>
              <option value="Doctor">Doctor</option>
            </Select>
            <Button
              bgColor="teal"
              w="full"
              size="sm"
              py="4"
              _hover={{ bgColor: "teal" }}
              letterSpacing={"1.3px"}
              fontWeight="500"
              fontSize="14px"
              color="white"
              leftIcon={<AiOutlineMail fontSize={"20px"} />}
              onClick={() => {
                axios
                  .post(`${process.env.REACT_APP_URL}/user/signup`, signupform)
                  .then((res) => {
                    res.data == "Acc created"
                      ? toast({
                          title: "Account created successfully",
                          status: "success",
                          position: "top",
                          duration: 2000,
                          isClosable: true,
                        })
                      : toast({
                          title:
                            "This acc has been already register previously",
                          status: "error",
                          position: "top",
                          duration: 2000,
                          isClosable: true,
                        });
                  })
                  .catch((err) => console.log(err.message));
              }}
            >
              {" "}
              Create User
            </Button>
            {/* </Link> */}
            <Link to="/admin/dashboard">
              <Text
                as="i"
                _hover={{ textDecoration: "underline" }}
                fontSize="12px"
                color="teal"
              >
                GO TO DASHBOARD{" "}
              </Text>
            </Link>
          </Flex>
        </VStack>
      </Grid>
    </Box>
  );
};

export default CreateUser;
