import { Heading, HStack } from "@chakra-ui/layout";
import React from "react";
import ByDiscount from "./ByDiscount";
import ByDiscountCategory from "./ByDiscountCategory";
import ByPrice from "./ByPrice";
import ByPriceCategory from "./ByPriceCategory";

interface IProps {
  handlePriceSort: Function;
  handleDiscountSort: Function;
  hanldePriceCategory: Function;
  hanldeDiscountCategory: Function;
}

const Filters: React.FC<IProps> = ({
  hanldePriceCategory,
  handlePriceSort,
  handleDiscountSort,
  hanldeDiscountCategory,
}) => {
  return (
    <HStack
      w={{ base: "100%", sm: "100%", md: "93%", lg: "80%" }}
      m="auto"
      mb="5"
      mt="4"
      px={[1, 1, 4, 5]}
      justifyContent={"space-evenly"}
    >
      <Heading
        display={["none", "flex"]}
        size="lg"
        fontWeight={"500"}
        color="blackAlpha.700"
      >
        Filter :
      </Heading>
      <ByPrice handlePriceSort={handlePriceSort} />
      <ByPriceCategory hanldePriceCategory={hanldePriceCategory} />
      <ByDiscount handleDiscountSort={handleDiscountSort} />
      <ByDiscountCategory hanldeDiscountCategory={hanldeDiscountCategory} />
    </HStack>
  );
};

export default Filters;
