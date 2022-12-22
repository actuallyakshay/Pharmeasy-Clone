import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
