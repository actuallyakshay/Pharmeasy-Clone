import React from "react";

import { Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  color: string;
}

const Title: React.FC<IProps> = ({ title, color }) => {
  return (
    <Text
      fontSize="15px"
      fontWeight="500"
      fontFamily="poppins"
      color={color}
      textAlign={"center"}
    >
      {title}
    </Text>
  );
};

export default Title;
