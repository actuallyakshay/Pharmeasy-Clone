import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import NavbarTitle from "../molecules/NavbarTitle";
import NavbarBorderBottom from "../molecules/NavbarBorderBottom";
import NavbarItems from "../Components/Navbar/NavbarItems";
import React, { useState } from "react";
import Login from "../Components/Login/Login";
import PinCodeSelect from "../Components/Cart/PinCodeSelect/PinCodeSelect";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  const changeNavbarBg = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <>
      <Box
        display={location.pathname.includes("admin") ? "none" : "flex"}
        bg="white"
        flexDirection="column"
        position={"sticky"}
        w="100%"
        zIndex={50}
        top="0%"
      >
        <Flex
          w="90%"
          m="auto"
          pt=".7rem"
          px=".5rem"
          justifyContent="space-between"
          alignContent="stretch"
          // flexDirection="column"
        >
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
            <HStack direction="column">
              <PinCodeSelect />
            </HStack>
          </Flex>

          <Flex align="center" gap="2rem">
            <Flex align="center" cursor="pointer">
              <BsPerson fontWeight="600" fontSize="21px" />
              <Login />
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
            <Link to="/cart">
              <Flex align="center" cursor="pointer">
                <IoMdCart fontWeight="600" fontSize="19px" />
                <NavbarTitle title="Cart" />
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <NavbarBorderBottom />
        <NavbarItems />
        <NavbarBorderBottom />
      </Box>
    </>
  );
};

export default Navbar;
