import express, {
  IRouter,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { Cart } from "./cart.model";
import jwt, { verify, Secret, JwtPayload } from "jsonwebtoken";

const cartRouter: IRouter = Router();
const SecretKey: Secret = "17147714";

const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.body.token;
  try {
    const decoded = jwt.verify(token, SecretKey) as JwtPayload;
    if (decoded) {
      
    } else {
      return res.status(404).send("UnAuthorised");
    }
  } catch (error) {
    return res.send(error);
  }
};

cartRouter.get("", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cart = await Cart.find();
  } catch (error) {
    return res.send(error);
  }
});

export default cartRouter;
