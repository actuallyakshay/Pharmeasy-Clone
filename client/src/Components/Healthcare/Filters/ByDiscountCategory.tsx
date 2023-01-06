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
  hanldeDiscountCategory: Function;
}

const ByDiscountCategory: React.FC<IProps> = ({ hanldeDiscountCategory }) => {
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
          <Text display={{ base: "flex", md: "none" }}>%Cat</Text>
          <BiDownArrow />
        </HStack>
      </MenuButton>

      <MenuList zIndex="1000">
        {arr.map((el: string, i) => {
          return (
            <MenuItem
              key={el + i}
              onClick={() => hanldeDiscountCategory(el)}
              _hover={{ bg: "#15aca5", color: "white" }}
            >
              Off (%) : {el}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ByDiscountCategory;

const arr: Array<string> = ["0 - 5", "5 - 15", "15 - 30", "30 - 60", "60 - 90"];
