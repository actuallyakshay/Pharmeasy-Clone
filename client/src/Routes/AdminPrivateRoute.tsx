import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../Redux/Store";

interface IProps {
  children: ReactElement;
}

const AdminPrivateRoute: React.FC<IProps> = ({ children }) => {
  const adminAuth = useSelector(
    (state: AppState) => state?.authReducer?.adminAuth
  );

  if (!adminAuth) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminPrivateRoute;
