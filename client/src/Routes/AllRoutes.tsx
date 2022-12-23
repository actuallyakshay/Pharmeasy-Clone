import React from "react";
import { Route, Routes } from "react-router";
import { Healthcare } from "../Components/Healthcare/Healthcare";
import { Medicine } from "../Components/Medicine/Medicine";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Medicine />} path="/product/medicine"></Route>
      <Route element={<Healthcare />} path="/product/healthcare"></Route>
    </Routes>
  );
};

export default AllRoutes;
