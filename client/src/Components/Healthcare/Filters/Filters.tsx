import { Heading, HStack } from "@chakra-ui/layout";
import React from "react";
import ByDiscount from "./ByDiscount";
import ByPrice from "./ByPrice";
import ByPriceCategory from "./ByPriceCategory";

interface IProps {
  handlePriceSort: Function;
  handleDiscountSort: Function;
  hanldePriceCategory: Function;
}

const Filters: React.FC<IProps> = ({
  hanldePriceCategory,
  handlePriceSort,
  handleDiscountSort,
}) => {
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
      <ByPriceCategory hanldePriceCategory={hanldePriceCategory} />
      <ByDiscount handleDiscountSort={handleDiscountSort} />
    </HStack>
  );
};

export default Filters;
