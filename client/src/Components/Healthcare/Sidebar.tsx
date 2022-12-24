import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import {
  FaBaby,
  FaChessKing,
  FaPeopleCarry,
  FaSalesforce,
} from "react-icons/fa";
import { SiWorldhealthorganization } from "react-icons/si";
import { BiFoodMenu } from "react-icons/bi";
import {
  GiDiabloSkull,
  GiMedicines,
  GiHealthDecrease,
  GiTellerMine,
  GiStomach,
} from "react-icons/gi";

interface IProps {
  temp: number;
  handleClick: Function;
}

const Sidebar: React.FC<IProps> = ({ temp, handleClick }) => {
  return (
    <VStack top="0%" position={"sticky"} align="start" h="100vh">
      <Heading
        px={["1", "1", "3", "5"]}
        size="sm"
        fontWeight={"500"}
        color="blackAlpha.700"
      >
        Category
      </Heading>
      <br />
      <Divider color="gray.300" />
      <VStack
        w={{ base: "80px", md: "full", lg: "full" }}
        align="start"
        direction="row"
      >
        {arr.map((el: IString, i: number) => {
          return (
            <Flex
              justifyContent={"space-between"}
              alignItems="center"
              w="full"
              onClick={() => handleClick(i, el.name)}
              transition={".5s"}
              py="2"
              px={["1", "1", "3", "5"]}
              key={i}
              cursor="pointer"
              bg={temp === i ? "#079b94" : ""}
              color={temp === i ? "white" : "black"}
            >
              <Text
                fontSize={"13px"}
                fontWeight="400"
                letterSpacing=".6px"
                textTransform="capitalize"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                w={["80px", "80px", "90px", "100px"]}
              >
                {el.name}
              </Text>
              <Box display={{ base: "none", md: "flex" }}>{el.icon}</Box>
            </Flex>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default Sidebar;

interface IString {
  name: string;
  icon: ReactElement;
}

const arr: IString[] = [
  { name: "sale", icon: <FaSalesforce size="22px" /> },
  { name: "ayurvedic", icon: <GiMedicines size="22px" /> },
  { name: "babycare", icon: <FaBaby size="22px" /> },
  { name: "diabetes", icon: <GiDiabloSkull size="22px" /> },
  { name: "disinfactents", icon: <SiWorldhealthorganization size="22px" /> },
  { name: "disinfactents", icon: <GiTellerMine size="22px" /> },
  { name: "healthcareDevices", icon: <GiHealthDecrease size="22px" /> },
  { name: "healthFood", icon: <BiFoodMenu size="22px" /> },
  { name: "skincare", icon: <FaChessKing size="22px" /> },
  { name: "immunity", icon: <FaPeopleCarry size="22px" /> },
  { name: "stomach", icon: <GiStomach size="22px" /> },
];
