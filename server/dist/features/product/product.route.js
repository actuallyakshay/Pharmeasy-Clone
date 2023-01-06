"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const express_1 = require("express");
const trash_model_1 = require("../Trash/trash.model");
const productRouter = (0, express_1.Router)();
productRouter.get("", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 30, category, input, priceSort, offSort, priceArr, offArr, firstLetter, } = req.query;
    try {
        if (category && firstLetter) {
            const temp = firstLetter;
            let products = yield product_model_1.Product.find({
                category: category,
                name: { $regex: "^" + temp, $options: "i" },
            }).limit(Number(limit));
            return res.send(products);
        }
        else if (category && offArr) {
            console.log(offArr);
            let [min, max] = priceArr.split(" - ").map(Number);
            let products = yield product_model_1.Product.find({
                category: category,
                $and: [{ off: { $gte: min } }, { off: { $lt: max } }],
            })
                .sort({ off: 1 })
                .limit(Number(limit));
            return res.status(200).send(products);
        }
        else if (category && priceArr) {
            let [min, max] = priceArr.split(" - ").map(Number);
            let products = yield product_model_1.Product.find({
                category: category,
                $and: [{ price1: { $gte: min } }, { price1: { $lt: max } }],
            })
                .sort({ price1: 1 })
                .limit(Number(limit));
            return res.status(200).send(products);
        }
        else if (category && priceSort) {
            if (priceSort === "asc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ price1: 1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
            else if (priceSort === "desc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ price1: -1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
        }
        else if (category && offSort) {
            if (offSort === "asc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ off: 1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
            else if (offSort === "desc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ off: -1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
        }
        else if (input) {
            let temp = new RegExp(input, "i");
            let product = yield product_model_1.Product.find({ name: temp })
                .limit(Number(limit))
                .skip((Number(page) - 1) * Number(limit));
            return res.status(200).send(product);
        }
        else if (category) {
            let product = yield product_model_1.Product.find({ category })
                .skip((Number(page) - 1) * Number(limit))
                .limit(Number(limit));
            return res.status(200).send(product);
        }
        else {
            let product = yield product_model_1.Product.find()
                .skip((Number(page) - 1) * Number(limit))
                .limit(Number(limit));
            return res.status(200).send(product);
        }
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
productRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let trash = yield trash_model_1.Trash.create(req.body);
        yield product_model_1.Product.findByIdAndDelete(req.params.id);
        res.send(trash);
    }
    catch (e) {
        return res.send(e);
    }
}));
productRouter.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findById({
            _id: req.params.id,
        });
        return res.status(200).send(product);
    }
    catch (error) {
        return res.send(error);
    }
}));
productRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, star, user_name, user_image, title } = req.body;
    console.log(type, star);
    try {
        if (type === "ratings") {
            let product = yield product_model_1.Product.findByIdAndUpdate({
                _id: req.params.id,
            }, {
                $push: { ratings: star },
            });
            return res.send(product);
        }
        else if (type === "reviews") {
            let product = yield product_model_1.Product.findByIdAndUpdate({
                _id: req.params.id,
            }, {
                $push: {
                    reviews: {
                        user_name: user_name,
                        user_image: user_image,
                        title: title,
                    },
                },
            });
            return res.send(product);
        }
    }
    catch (error) {
        return res.send(error);
    }
}));
exports.default = productRouter;
