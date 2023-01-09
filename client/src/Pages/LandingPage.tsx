import React from "react";
import { Box } from "@chakra-ui/react";
import SearchBar from "../Components/Navbar/SearchBar";
import Category from "../Components/HomePage/Category";
import OffersTags from "../Components/HomePage/OffersTags";
import LabTests from "../Components/HomePage/LabTests";
import BankOffers from "../Components/HomePage/BankOffers";
import ShopByCategory from "../Components/HomePage/ShopByCategory";
import NewLaunches from "../Components/HomePage/NewLaunches";
import Trending from "../Components/HomePage/Trending";
import ShopByConcern from "../Components/HomePage/ShopByConcern";
import InTheSoptlight from "../Components/HomePage/InTheSoptlight";
import WhyChooseUs from "../Components/HomePage/WhyChooseUs";

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Box
        w={{ base: "100%", lg: "95%" }}
        m="auto"
        bg="radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)"
      >
        <SearchBar
          pt="2.8rem"
          w="auto"
          width="60%"
          mt="1.3rem"
          inputSize="lg"
          buttonSize="md"
        />
        <Category />
        <OffersTags />
        <LabTests />
        <BankOffers />
        <ShopByCategory />
        <NewLaunches />
        <Trending />
        <ShopByConcern />
        <InTheSoptlight />
        <WhyChooseUs />
      </Box>
    </Box>
  );
};

export default LandingPage;
