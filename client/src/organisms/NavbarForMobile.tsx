import React, { ReactElement, useRef } from "react";
import {
  Box,
  HStack,
  Text,
  VStack,
  useDisclosure,
  Image,
  Input,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { GiMedicines, GiHealthNormal } from "react-icons/gi";
import { GiDoctorFace } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import { FaStore } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { BsPerson } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { RiMentalHealthFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import Login from "../Components/Login/Login";
import Items from "../molecules/Items";

interface IData {
  link: string;
  title: string;
  icon: ReactElement;
}

const data: IData[] = [
  {
    link: "/product/medicine",
    icon: <GiMedicines size="22px" />,
    title: "Medicine",
  },
  { link: "/product/labtest", icon: <ImLab />, title: "Lab Tests" },
  {
    link: "/product/healthcare",
    icon: <GiHealthNormal />,
    title: "Healthcare",
  },
  {
    link: "/product/healthcare",
    icon: <GiDoctorFace />,
    title: "Surgeries",
  },
  {
    link: "/product/healthcare",
    icon: <RiMentalHealthFill />,
    title: "Health Blogs",
  },
  { link: "/product/healthcare", icon: <HiPlusCircle />, title: "PLUS" },
  { link: "/product/healthcare", icon: <MdLocalOffer />, title: "Offers" },
  {
    link: "/product/healthcare",
    icon: <FaStore />,
    title: "Value Store",
  },
];

const NavbarForMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  // const btnRef = useRef();

  return (
    <HStack
      display={{ base: "flex", lg: "none" }}
      padding="1.5rem"
      justify="space-between"
    >
      <HStack gap=".5rem">
        <Box onClick={onOpen}>
          <RiMenuUnfoldLine fontSize="20px" color="#0e746e" />
        </Box>
        <Link to="/">
          <Box>
            <Image
              src="https://assets.pharmeasy.in/apothecary/images/logo_small.svg?dim=128x0"
              alt="logo"
              w="auto"
              h="auto"
            />
          </Box>
        </Link>
      </HStack>
      <HStack gap="1rem">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/879/879757.png"
          alt="offer_image"
          w="1.1rem"
          h="1.1rem"
        />
        <IoMdCart
          onClick={() => navigate("/cart")}
          fontWeight="600"
          fontSize="22px"
        />
      </HStack>

      {/* drawer */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <HStack bg="gray.100" align="center">
            <DrawerCloseButton />
            <Flex align="center" cursor="pointer" p="1.5rem" bg="gray.100">
              <BsPerson fontWeight="600" fontSize="21px" />
              <Login />
            </Flex>
          </HStack>

          <DrawerBody>
            <Flex direction="column" justify="start" mt="2rem">
              {data.map(({ title, link, icon }) => {
                return (
                  <HStack
                    onClick={() => onClose()}
                    mb="2rem"
                    w="full"
                    justify="space-between"
                  >
                    <Flex gap="1.5rem">
                      <Box>{icon}</Box>
                      <Link key={title} to={link}>
                        <Items items={title} />
                      </Link>
                    </Flex>
                    <Box ml="auto">
                      <FiChevronRight />
                    </Box>
                  </HStack>
                );
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default NavbarForMobile;
