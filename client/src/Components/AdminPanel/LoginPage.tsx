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
} from "@chakra-ui/react";

const LoginPage: React.FC = () => {
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
        <Box _hover={{ cursor: "pointer" }}>
          <Image
            src="https://res.cloudinary.com/dhxtxmw5n/image/upload/v1671389264/logo_bj5fla.png"
            w="30%"
          />
        </Box>
        <HStack>
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
                name="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                fontWeight={"600"}
                letterSpacing="1px"
                type="password"
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
                name="password"
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
