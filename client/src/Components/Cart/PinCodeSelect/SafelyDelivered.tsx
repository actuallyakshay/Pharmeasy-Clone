import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FcAbout } from "react-icons/fc";

const SafelyDelivered: React.FC = () => {
  return (
    <HStack py="2" px="3" gap="3" w="full" borderRadius={"8px"} bg="#f3f6fa">
      <FcAbout fontSize={"25px"} />
      <VStack align="start">
        <Text>Over 30,00,000 orders safely delivered</Text>
        <Heading color="#32c5ff" size="xs">
          Know more
        </Heading>
      </VStack>
    </HStack>
  );
};

export default SafelyDelivered;
