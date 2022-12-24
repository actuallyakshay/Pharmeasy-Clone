import { Text } from "@chakra-ui/react";

import React from "react";

interface IProps {
  title: string;
}

const FooterTitle: React.FC<IProps> = ({ title }) => {
  return (
    <Text
      fontSize="14px"
      fontWeight="300"
      fontFamily="poppins"
      color="#30363c"
      lineHeight="30px"
    >
      {title}
    </Text>
  );
};

export default FooterTitle;
