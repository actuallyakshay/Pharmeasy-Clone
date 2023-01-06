import {
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Box,
  Heading,
  InputGroup,
  InputRightAddon,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import SafelyDelivered from "./SafelyDelivered";
import Serving from "./Serving";

const PinCodeSelect: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pin, setPin] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPin(e.target.value);
  };

  type EStatus =
    | "info"
    | "warning"
    | "success"
    | "error"
    | "loading"
    | undefined;

  const customToast = (
    title: string,
    status: EStatus,
    description: string
  ): void => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleClickPinCode = (): void => {
    axios
      .get(`https://api.postalpincode.in/pincode/${pin}`)
      .then((res) => {
        if (res.data[0].Status === "Error") {
          customToast("Hey !", "warning", "We don't deliver at this location");
        } else {
          setLocation(res.data[0].PostOffice[0].District);
          customToast(
            "Hey !",
            "success",
            `Delivery is available at ${res.data[0].PostOffice[0].District} location`
          );
          setPin("");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Text
        onClick={onOpen}
        fontSize={"14px"}
        fontWeight="500"
        letterSpacing={".4px"}
        color="teal"
        cursor={"pointer"}
      >
        ⚡ Delivery to
      </Text>
      <Drawer size={"sm"} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Box cursor={"pointer"} position="absolute" left="12px" top="4%">
            <DrawerCloseButton
              bg="white"
              borderRadius={"0"}
              color={"black"}
              fontSize="15px"
              p="7"
            />
          </Box>
          <DrawerHeader>
            <Heading
              mt="10"
              letterSpacing={".6px"}
              color="blackAlpha.700"
              w="300px"
              size="lg"
            >
              {location !== ""
                ? `We Deliver at ${location}`
                : "Choose your location"}
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack gap="2" align={"start"} px="5" w={"full"}>
              <InputGroup size="lg">
                <Input
                  value={pin}
                  onChange={handleChange}
                  type="number"
                  outline={"none"}
                  placeholder="Enter pincode"
                />
                <InputRightAddon
                  bg="teal"
                  color="white"
                  as="button"
                  onClick={handleClickPinCode}
                  fontWeight={"500"}
                  px="7"
                  letterSpacing={".4px"}
                  children="Check"
                />
              </InputGroup>
              <Serving />
              <SafelyDelivered />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PinCodeSelect;
