export interface IAuth {
  payload?: boolean;
  userAuth?: boolean;
  adminAuth?: boolean;
  userLoading?: boolean;
  userOTP?: string;
  token?: string;
}
