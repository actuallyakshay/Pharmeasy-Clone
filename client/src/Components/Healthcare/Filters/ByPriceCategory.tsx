import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BiDownArrow } from "react-icons/bi";

interface IProps {
  hanldePriceCategory: Function;
}

const ByPriceCategory: React.FC<IProps> = ({ hanldePriceCategory }) => {
  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.5s"
        borderRadius="sm"
        borderWidth="1px"
        _expanded={{ bg: "teal", color: "white" }}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
      >
        <HStack>
          <Text display={{ base: "none", md: "flex" }}>Category</Text>
          <Text display={{ base: "flex", md: "none" }}>₹Cat</Text>
          <BiDownArrow />
        </HStack>
      </MenuButton>

      <MenuList zIndex="1000">
        {arr.map((el: string, i) => {
          return (
            <MenuItem
              key={el + i}
              onClick={() => hanldePriceCategory(el)}
              _hover={{ bg: "#15aca5", color: "white" }}
            >
              Price (₹) : {el}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ByPriceCategory;

const arr: Array<string> = [
  "0 - 200",
  "200 - 800",
  "800 - 1500",
  "1500 - 3000",
  "3000 - 6000",
  "6000 above",
];
