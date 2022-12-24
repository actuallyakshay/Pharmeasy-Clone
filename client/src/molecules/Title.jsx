import { Box, Text } from "@chakra-ui/react";

const Title = ({ title, center, color }) => {
  return (
    <Text
      fontSize="15px"
      fontWeight="500"
      fontFamily="poppins"
      color={color}
      textAlign={center}
    >
      {title}
    </Text>
  );
};

export default Title;
