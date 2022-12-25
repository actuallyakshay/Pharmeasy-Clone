import React from "react";
import { Route, Routes } from "react-router";
import { Healthcare } from "../Components/Healthcare/Healthcare";
import { Medicine } from "../Components/Medicine/Medicine";
import LandingPage from "../Pages/LandingPage";
import SingleProductPage from "../Pages/SingleProductPage";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/"></Route>
      <Route element={<Medicine />} path="/product/medicine"></Route>
      <Route element={<Healthcare />} path="/product/healthcare"></Route>
      <Route element={<SingleProductPage />} path="/product/:id"></Route>
    </Routes>
  );
};

export default AllRoutes;
