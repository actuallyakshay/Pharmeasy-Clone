import React from "react";

import { Text } from "@chakra-ui/react";

const NavbarTitle = ({ title }) => {
  return (
    <Text
      fontFamily="Poppins"
      fontWeight="500"
      fontSize="14px"
      color="#0d5853"
      ml=".5rem"
      _hover={{ borderBottom: "1px dotted black" }}
    >
      {title}
    </Text>
  );
};

export default NavbarTitle;
