import { Box, Text, Flex } from "@chakra-ui/react";
import { CgNotes } from "react-icons/cg";

const SearchBarHeading: React.FC = () => {
  return (
    <Flex>
      <Text
        fontFamily="poppins"
        fontSize="20px"
        fontWeight="500"
        color="rgb(16 132 126)"
      >
        What are you looking for?
      </Text>
      <Flex ml="auto" pt="1rem" align="center" w="37%" justify="space-between">
        <Box>
          <CgNotes fontSize="18px" />
        </Box>
        <Text
          fontFamily="poppins"
          fontSize="14px"
          fontWeight="500"
          color="#30363c"
        >
          Order with prescription.
        </Text>
        <Flex align="center">
          <Text
            fontFamily="poppins"
            fontSize="14px"
            fontWeight="500"
            color="#89c2bf"
            textTransform="uppercase"
          >
            upload now
          </Text>
          <Box></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SearchBarHeading;
