import { Heading, HStack } from "@chakra-ui/layout";
import React from "react";
import ByDiscount from "./ByDiscount";
import ByPrice from "./ByPrice";
import ByPriceCategory from "./ByPriceCategory";

interface IProps {
  handlePriceSort: Function;
  handleDiscountSort: Function;
}

const Filters: React.FC<IProps> = ({ handlePriceSort, handleDiscountSort }) => {
  return (
    <HStack
      border="1px solid green"
      w={{ base: "100%", sm: "100%", md: "93%", lg: "83%" }}
      m="auto"
      justifyContent={"space-between"}
    >
      <Heading size="lg" fontWeight={"500"} color="blackAlpha.700">
        Filter :
      </Heading>
      <ByPrice handlePriceSort={handlePriceSort} />
      <ByPriceCategory />
      <ByDiscount handleDiscountSort={handleDiscountSort} />
    </HStack>
  );
};

export default Filters;
