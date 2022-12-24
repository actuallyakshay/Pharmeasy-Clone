import { Text } from "@chakra-ui/react";

const FooterTitle = ({ title }) => {
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
