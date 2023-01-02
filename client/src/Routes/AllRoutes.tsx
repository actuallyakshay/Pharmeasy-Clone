import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../Pages/Cart";
import { Healthcare } from "../Components/Healthcare/Healthcare";
import { Medicine } from "../Components/Medicine/Medicine";
import LandingPage from "../Pages/LandingPage";
import SingleProductPage from "../Pages/SingleProductPage";
import LabTestPage from "../Components/LabTest/LabTestPage";
import AllTest from "../Components/LabTest/AllTest";
import HealthCarePackages from "../Components/LabTest/HealthCarePackages";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/"></Route>
      <Route element={<Medicine />} path="/product/medicine"></Route>
      <Route element={<Cart />} path="/cart"></Route>
      <Route element={<Healthcare />} path="/product/healthcare"></Route>
      <Route element={<LabTestPage />} path="/product/labtest"></Route>
      <Route element={<AllTest />} path="/product/labtest/alltest"></Route>
      <Route
        element={<HealthCarePackages />}
        path="/product/labtest/health-care-packages"
      ></Route>
      <Route element={<SingleProductPage />} path="/product/:id"></Route>
    </Routes>
  );
};

export default AllRoutes;
