import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../Pages/Cart";
import { Healthcare } from "../Components/Healthcare/Healthcare";
import { Medicine } from "../Components/Medicine/Medicine";
import LandingPage from "../Pages/LandingPage";
import SingleProductPage from "../Pages/SingleProductPage";
import AdminSignup from "../Pages/AdminSignup";
import LoginPage from "../Components/AdminPanel/LoginPage";
import AllProducts from "../Components/AdminPanel/AllProducts";
import Trash from "../Components/AdminPanel/Trash";
import FirstPage from "../Components/AdminPanel/FirstPage";
import AllUsers from "../Components/AdminPanel/AllUsers";
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
      <Route element={<AdminSignup />} path="/admin/signup"></Route>
      <Route element={<LoginPage />} path="/admin/login"></Route>
      <Route element={<AllProducts />} path="/admin/products"></Route>
      <Route element={<Trash />} path="/admin/trash"></Route>
      <Route element={<FirstPage />} path="/admin/dashboard"></Route>
      <Route element={<AllUsers />} path="/admin/users"></Route>
    </Routes>
  );
};

export default AllRoutes;
