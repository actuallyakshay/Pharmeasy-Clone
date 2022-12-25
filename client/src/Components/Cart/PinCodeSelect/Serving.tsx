import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Serving: React.FC = () => {
  return (
    <HStack
      py="3"
      px="2"
      gap="3"
      borderRadius={"8px"}
      bg="#f3f6fa"
    >
      <Image
        src="https://assets.pharmeasy.in/web-assets/_next/icons/scooter-coloured.svg"
        alt="x-x"
      />
      <Text>Serving more than 1,000 towns and cities in India.</Text>
    </HStack>
  );
};

export default Serving;
