import { IRouter, Request, Response, Router } from "express";
import { IProduct, Product } from "../product/product.model";
import { Trash } from "./trash.model";

const trashRouter: IRouter = Router();

trashRouter.get("", async (req: Request, res: Response) => {
  try {
    let trashs: IProduct[] = await Trash.find();
    return res.send(trashs);
  } catch (e) {
    return res.send(e);
  }
});

trashRouter.post("", async (req: Request, res: Response) => {
  try {
    let product: IProduct = await Product.create(req.body);
    await Trash.findByIdAndDelete(req.body._id);
    return res.send(product);
  } catch (e) {
    return res.send(e);
  }
});

export default trashRouter;
