import { Box, Flex, Image, HStack } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import NavbarTitle from "../molecules/NavbarTitle";
import NavbarBorderBottom from "../molecules/NavbarBorderBottom";
import NavbarItems from "../Components/Navbar/NavbarItems";
import React, { useState } from "react";
import Login from "../Components/Login/Login";
import PinCodeSelect from "../Components/Cart/PinCodeSelect/PinCodeSelect";
import SearchBar from "../Components/Navbar/SearchBar";

interface IData {
  link: string;
  url: string;
  title: string;
}

const data: IData[] = [
  { link: "/product/medicine", url: "", title: "Medicine" },
  { link: "/product/labtest", url: "", title: "Lab Tests" },
  { link: "/product/healthcare", url: "", title: "Healthcare" },
  { link: "", url: "", title: "Surgeries" },
  { link: "", url: "", title: "Health Blogs" },
  { link: "", url: "", title: "PLUS" },
  { link: "", url: "", title: "Offers" },
  { link: "", url: "", title: "Value Store" },
];

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  const changeNavbarBg = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <Box
      position={"sticky"}
      top="0%"
      display={{ base: "none", lg: "block" }}
      zIndex={50}
    >
      <Box
        display={location.pathname.includes("admin") ? "none" : "flex"}
        bg="white"
        flexDirection="column"
        w="100%"
      >
        <Flex
          w="90%"
          m="auto"
          pt=".7rem"
          px=".5rem"
          justifyContent="space-between"
          gap="1rem"
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
          <Box w="45%" display={navbar ? "flex" : "none"}>
            <SearchBar
              pt="0px"
              w="100%"
              width="100%"
              mt="0px"
              inputSize="md"
              buttonSize="sm"
            />
          </Box>
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
    </Box>
  );
};

export default Navbar;
