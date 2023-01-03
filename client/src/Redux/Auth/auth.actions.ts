import { Dispatch } from "redux";
import { IAuth } from "../../@types/IAuth";
import { IAuthtypes } from "./auth.type";

export interface IAuthAction {
  type: IAuthtypes;
  payload?: boolean;
}

export const getLogin =
  (payload: boolean) => (dispatch: Dispatch<IAuthAction>) => {
    dispatch({ type: IAuthtypes.GET_ADMIN_LOGIN_SUCCESS, payload });
  };

export const adminLogout = () => (dispatch: Dispatch<IAuthAction>) => {
  dispatch({ type: IAuthtypes.GET_ADMIN_LOGOUT });
};
