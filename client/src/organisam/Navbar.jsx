import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavbarTitle from "../molecules/NavbarTitle";
import NavbarBorderBottom from "../molecules/NavbarBorderBottom";
import NavbarItems from "../component/NavbarItems";

const Navbar = () => {
  return (
    <Box bg="white">
      <Flex w="90%" m="auto" mt=".7rem" px=".5rem" align="center">
        <Flex>
          <Box>
            <Link to="/">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
                alt="logo"
                w="auto"
                h="auto"
              />
            </Link>
          </Box>
          <Flex align="center" px="2rem">
            <Box borderRight="1px solid #8897a2" h="2rem" />
          </Flex>
          <Flex direction="column">
            <Flex>
              <Text
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="12px"
                color="#4f585e"
              >
                Delivery to
              </Text>
            </Flex>
            <Flex align="center">
              <Text
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="14px"
                color="#000"
              >
                411033 Pune
              </Text>
              <Flex align="center">
                <MdOutlineKeyboardArrowDown fontWeight="600" fontSize="21px" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex ml="auto" align="center" justify="space-between" w="38%">
          <Flex align="center">
            <Button
              cursor="pointer"
              bg="rgb(238, 244, 255)"
              leftIcon={
                <CiMobile2 fontWeight="400" fontSize="25px" color="black" />
              }
            >
              Download App
            </Button>
          </Flex>
          <Flex align="center" cursor="pointer">
            <BsPerson fontWeight="600" fontSize="21px" />
            <NavbarTitle title="Hello, Log in" />
          </Flex>
          <Flex align="center" cursor="pointer">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/879/879757.png"
              alt="offer_image"
              w="1.1rem"
              h="1.1rem"
            />
            <NavbarTitle title="Offers" />
          </Flex>
          <Flex align="center" cursor="pointer">
            <BsCart fontWeight="600" fontSize="19px" />
            <NavbarTitle title="Cart" />
          </Flex>
        </Flex>
      </Flex>
      <NavbarBorderBottom />
      <NavbarItems />
      <NavbarBorderBottom />
    </Box>
  );
};

export default Navbar;
