import { IAuth } from "../../@types/IAuth";
import { IAuthAction } from "./auth.actions";
import { IAuthtypes } from "./auth.type";

let token = localStorage.getItem("token") || "";

const iState: IAuth = {
  adminAuth: false,
  userLoading: false,
  userOTP: "",
  token,
  userAuth: !!token,
};

export const authReducer = (state = iState, action: IAuthAction) => {
  switch (action.type) {
    case IAuthtypes.GET_ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminAuth: action.payload,
      };

    case IAuthtypes.GET_ADMIN_LOGOUT:
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      return {
        ...state,
        adminAuth: false,
      };

    case IAuthtypes.GET_USER_LOGIN_LOADING:
      return {
        ...state,
        userLoading: true,
      };

    case IAuthtypes.GET_USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload?.token);
      return {
        ...state,
        userLoading: false,
        userOTP: String(action.payload.otp),
        token: action.payload?.token,
      };

    case IAuthtypes.GET_USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        userOTP: "",
        token: "",
      };
    default:
      return state;
  }
};
