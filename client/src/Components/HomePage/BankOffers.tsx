import { Box } from "@chakra-ui/react";
import React from "react";
import CommanCarousel from "../../molecules/CommanCarousel";
import ProductHeading from "../../molecules/ProductHeading";

const data: Array<string> = [
  "https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0",
  "https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1440x0",
];

const BankOffers: React.FC = () => {
  return (
    <Box w="93%" m="auto" mt={{ base: "5rem", md: "", lg: "3rem" }}>
      <Box mb="2rem">
        <ProductHeading heading="Payment Offers" />
      </Box>
      <CommanCarousel data={data} slidesToShow={3} top="25%" autoplay={false} />
    </Box>
  );
};

export default BankOffers;
