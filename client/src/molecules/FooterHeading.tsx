import { Text } from "@chakra-ui/react";
import React from "react";
interface IProps {
  heading: string;
}

const FooterHeading: React.FC<IProps> = ({ heading }) => {
  return (
    <Text
      fontSize="16px"
      fontWeight="600"
      fontFamily="poppins"
      color="black"
      lineHeight="20px"
    >
      {heading}
    </Text>
  );
};

export default FooterHeading;
