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
  handleDiscountSort: Function;
}

const ByDiscount: React.FC<IProps> = ({ handleDiscountSort }) => {
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
          <Text>%</Text>
          <BiDownArrow />
        </HStack>
      </MenuButton>
      <MenuList zIndex="1000">
        <MenuItem
          onClick={() => handleDiscountSort("desc")}
          _hover={{ bg: "#15aca5", color: "white" }}
        >
          Discount (%) : High To Low
        </MenuItem>
        <MenuItem
          onClick={() => handleDiscountSort("asc")}
          _hover={{ bg: "#15aca5", color: "white" }}
        >
          Discount (%) : Low To High
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ByDiscount;
