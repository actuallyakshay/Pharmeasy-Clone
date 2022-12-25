import { Center, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { ImLocation } from "react-icons/im";
import PinCodeSelect from "../PinCodeSelect/PinCodeSelect";
const DeliverPinCode: React.FC = () => {
  return (
    <HStack px="3" py="4" w="full" alignItems={"center"}>
      <Center>
        <ImLocation fontSize={"16px"} color="#e9787a" />
      </Center>
      <Heading fontSize={"16px"} fontWeight="400">
        Deliver to :
      </Heading>
      <PinCodeSelect />
    </HStack>
  );
};

export default DeliverPinCode;
