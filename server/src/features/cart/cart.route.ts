import express, {
  IRouter,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { Cart, ICart } from "./cart.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser, User } from "../Auth/user.model";

const cartRouter: IRouter = Router();

interface ExtendedRequest extends Request {
  userId: string;
}

const authMiddleWare = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string;
  try {
    if (!token) {
      return res.send("Missing Token");
    } else {
      console.log("decddd");
      const decoded = jwt.verify(token, "17147714") as JwtPayload;
      if (decoded) {
        let user: IUser | null = await User.findOne({ _id: decoded._id });
        if (user) {
          req.userId = user._id;
          next();
        } else {
          return res.send("user doesn't exist");
        }
      } else {
        return res.status(404).send("Invalid token");
      }
    }
  } catch (error) {
    return res.send(error);
  }
};

// cartRouter(authMiddleWare);

cartRouter.get(
  "",
  authMiddleWare,
  async (req: ExtendedRequest, res: Response) => {
    try {
      const cart: ICart[] = await Cart.find({ _id: req.userId });
      return res.send(cart);
    } catch (error) {
      return res.send(error);
    }
  }
);

export default cartRouter;
