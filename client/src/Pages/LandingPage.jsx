import { Box } from "@chakra-ui/react";
import SearchBar from "../Component/Navbar/SearchBar";
import Category from "../Component/HomePage/Category";
import OffersTags from "../Component/HomePage/OffersTags";
import LabTests from "../Component/HomePage/LabTests";
import BankOffers from "../Component/HomePage/BankOffers";
import ShopByCategory from "../Component/HomePage/ShopByCategory";
import NewLaunches from "../Component/HomePage/NewLaunches";
import Trending from "../Component/HomePage/Trending";
import ShopByConcern from "../Component/HomePage/ShopByConcern";
import InTheSoptlight from "../Component/HomePage/InTheSoptlight";

const LandingPage = () => {
  return (
    <Box>
      <Box
        w="95%"
        m="auto"
        bg="radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)"
      >
        <SearchBar />
        <Category />
        <OffersTags />
        <LabTests />
        <BankOffers />
        <ShopByCategory />
        <NewLaunches />
        <Trending />
        <ShopByConcern />
        <InTheSoptlight />
      </Box>
    </Box>
  );
};

export default LandingPage;
