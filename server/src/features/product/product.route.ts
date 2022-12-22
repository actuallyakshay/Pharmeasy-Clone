import { IProduct, Product } from "./product.model";
import { IRouter, NextFunction, Request, Response, Router } from "express";

const productRouter: IRouter = Router();

type IPage = {
  page: string;
  limit: string;
  category: string;
  input: string;
  priceSort: string;
  offSort: string;
  priceArr: string;
  offArr: string;
};

productRouter.get(
  "",
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      page,
      limit,
      category,
      input,
      priceSort,
      offSort,
      priceArr,
      offArr,
    } = req.query as IPage;
    try {
      if (category && offArr) {
        let [min, max]: Array<number> = priceArr.split(",").map(Number);

        let products: IProduct[] = await Product.find(
          { category },
          {
            $and: [{ $gte: { off: min } }, { $lt: { off: max } }],
          }
        );
        return res.status(200).send(products);
      } else if (category && priceArr) {
        let [min, max]: Array<number> = priceArr.split(",").map(Number);

        let products: IProduct[] = await Product.find(
          { category },
          {
            $and: [{ $gte: { price1: min } }, { $lt: { price1: max } }],
          }
        );
        return res.status(200).send(products);
      } else if (category && priceSort) {
        if (priceSort === "asc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ price1: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        } else if (priceSort === "desc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ price1: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        }
      } else if (category && offSort) {
        if (offSort === "asc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ off: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        } else if (offSort === "desc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ off: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        }
      } else if (category && input) {
        let temp: RegExp = new RegExp(input, "i");
        let product: IProduct[] = await Product.find({ category, title: temp })
          .skip((Number(page) - 1) * Number(limit))
          .limit(Number(limit));
        return res.status(200).send(product);
      } else if (category) {
        let product: IProduct[] = await Product.find({ category })
          .skip((Number(page) - 1) * Number(limit))
          .limit(Number(limit));
        return res.status(200).send(product);
      }
      let product: IProduct[] = await Product.find()
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));
      return res.status(200).send(product);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
);

productRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let product: IProduct | null = await Product.findByIdAndDelete({
        _id: req.params.id as string,
      });
      return res.send("Deleted Successfully");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
);

export default productRouter;