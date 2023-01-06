import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppState } from "../Redux/Store";

interface IProps {
  children: ReactElement;
}

const UserPrivateRoute: React.FC<IProps> = ({ children }) => {
  const userAuth = useSelector(
    (state: AppState) => state?.authReducer?.userAuth
  );

  if (!userAuth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default UserPrivateRoute;
