import { Text } from "@chakra-ui/react";

const FooterHeading = ({ heading }) => {
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
