import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

interface IProps {
  src: string;
  text: string;
  category: string;
  link: string;
}

const LabCard: React.FC<IProps> = ({ src, text, category, link }) => {
  const GetTest = () => {};

  useEffect(() => {}, []);
  return (
    <Link to={link}>
      <Flex
        gap="1rem"
        py="1.1rem"
        px="1.3rem"
        border="1px solid #4f585e"
        borderRadius="50px"
        _hover={{ border: "1px solid #10847e" }}
        w="240px"
        align="center"
        justify="start"
        cursor="pointer"
        onClick={() => GetTest}
        h="80px"
      >
        <Box>
          <Image src={src} alt="" w="30px" h="30px" />
        </Box>
        <Box>
          <Text
            fontSize="16px"
            color="#4f585e"
            fontWeight="600"
            fontFamily="Poppins"
            maxW="137px"
            _hover={{ color: "#10847e" }}
          >
            {text}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default LabCard;
