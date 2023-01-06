import axios from "axios";
import { Dispatch } from "redux";
import { IAuthtypes } from "./auth.type";

interface IOtp {
  otp: string | number;
  token: string;
  message: string;
}

export interface IAuthAction {
  type: IAuthtypes;
  payload?: boolean | IOtp | any;
}

export const getLogin =
  (payload: boolean) => (dispatch: Dispatch<IAuthAction>) => {
    dispatch({ type: IAuthtypes.GET_ADMIN_LOGIN_SUCCESS, payload });
  };

export const adminLogout = () => (dispatch: Dispatch<IAuthAction>) => {
  dispatch({ type: IAuthtypes.GET_ADMIN_LOGOUT });
};

export const getUserLogout = () => (dispatch: Dispatch<IAuthAction>) => {
  dispatch({ type: IAuthtypes.GET_USER_LOGOUT });
  window.location.reload();
};
