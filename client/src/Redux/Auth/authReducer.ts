import { IAuth } from "../../@types/IAuth";
import { IAuthAction } from "./auth.actions";
import { IAuthtypes } from "./auth.type";

const iState: IAuth = {
  adminAuth: false,
  userAuth: false,
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

    default:
      return state;
  }
};
