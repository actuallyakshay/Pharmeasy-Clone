import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../Components/Cart/Cart";
import { Healthcare } from "../Components/Healthcare/Healthcare";
import { Medicine } from "../Components/Medicine/Medicine";
import LandingPage from "../Pages/LandingPage";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/"></Route>
      <Route element={<Medicine />} path="/product/medicine"></Route>
      <Route element={<Cart />} path="/cart"></Route>
      <Route element={<Healthcare />} path="/product/healthcare"></Route>
    </Routes>
  );
};

export default AllRoutes;
