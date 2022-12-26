import { Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiTruckLine } from "react-icons/ri";
import { ICart } from "../../../@types/ICart";

interface IProps {
  cartData?: ICart[];
}

const BillSummery: React.FC<IProps> = ({ cartData }) => {
  const currPrice: number | undefined = cartData?.reduce(
    (acc: number, el: ICart) => (acc += el.product.price1 * el.quantity),
    0
  );
  const ActualPrice: number | undefined = cartData?.reduce(
    (acc: number, el: ICart) => (acc += el.product.price2 * el.quantity),
    0
  );
  return (
    <VStack gap="2" w="full" align="start" px="4">
      <Heading fontSize={"18px"} fontWeight={"500"}>
        Bill Summery
      </Heading>
      <HStack w="full" justifyContent={"space-between"}>
        <Text fontSize={"14px"} color="blackAlpha.600" fontWeight={"semibold"}>
          Value after discount
        </Text>
        <Text fontSize={"14px"} color="blackAlpha.600" fontWeight={"semibold"}>
          ₹ {currPrice}.00
        </Text>
      </HStack>
      <HStack w="full" justifyContent={"space-between"}>
        <Text fontSize={"14px"} color="blackAlpha.600" fontWeight={"semibold"}>
          Actual value
        </Text>
        <Text as='del' fontSize={"14px"} color="blackAlpha.600" fontWeight={"semibold"}>
          ₹ {ActualPrice}.00
        </Text>
      </HStack>
      <HStack border="1px solid #dfe3e6" w="full" py="3" px="3">
        <Text
          letterSpacing={".4px"}
          fontSize={"14px"}
          color="teal"
          fontWeight={"400"}
        >
          Free delivery
        </Text>
        <RiTruckLine color="teal" />
      </HStack>
      <Divider />
    </VStack>
  );
};

export default BillSummery;
