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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_model_1 = require("./cart.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../Auth/user.model");
const product_model_1 = require("../product/product.model");
const cartRouter = (0, express_1.Router)();
const authMiddleWare = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.token;
    try {
        if (!token) {
            return res.send("Missing Token");
        }
        else {
            const decoded = jsonwebtoken_1.default.verify(token, "17147714");
            if (decoded) {
                let user = yield user_model_1.User.findOne({ _id: decoded._id });
                if (user) {
                    req.body.userId = user._id;
                    next();
                }
                else {
                    return res.send("user doesn't exist");
                }
            }
            else {
                return res.status(404).send("Invalid token");
            }
        }
    }
    catch (error) {
        return res.send(error);
    }
});
cartRouter.get("/", authMiddleWare, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_model_1.Cart.find({ user: req.body.userId }).populate([
            "user",
            "product",
        ]);
        return res.send(cart);
    }
    catch (error) {
        return res.send(error);
    }
}));
cartRouter.post("", authMiddleWare, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let dbProduct = (yield product_model_1.Product.findOne({
            _id: req.body.product,
        }));
        let cartItem = (yield cart_model_1.Cart.findOne({ product: req.body.product }));
        if (cartItem) {
            if (req.body.type == "inc") {
                if (Check(dbProduct, req.body.quantity)) {
                    return res.send({
                        status: 0,
                        message: `Database have only ${dbProduct.quantity} quantity of this item`,
                    });
                }
                else {
                    let cart = yield cart_model_1.Cart.findOneAndUpdate({ product: req.body.product }, { $inc: { quantity: 1 } });
                    yield product_model_1.Product.findByIdAndUpdate({ _id: req.body.product }, { $inc: { quantity: -1 } });
                    return res.send(cart);
                }
            }
            else if (req.body.type == "dec") {
                if (cartItem.quantity == 1) {
                    yield cart_model_1.Cart.findOneAndDelete({ product: req.body.product });
                    yield product_model_1.Product.findByIdAndUpdate({ _id: req.body.product }, { $inc: { quantity: 1 } });
                    return res.send("Deleted");
                }
                else {
                    let cart = yield cart_model_1.Cart.findOneAndUpdate({ product: req.body.product }, { $inc: { quantity: -1 } });
                    yield product_model_1.Product.findByIdAndUpdate({ _id: req.body.product }, { $inc: { quantity: 1 } });
                    return res.send(cart);
                }
            }
            else if (req.body.type == "" || !req.body.type) {
                return res.send("Type is missing");
            }
        }
        else {
            if (Check(dbProduct, req.body.quantity)) {
                return res.send({
                    status: 0,
                    message: `Database have only ${dbProduct.quantity} quantity of this item`,
                });
            }
            else {
                let cartItem = yield cart_model_1.Cart.create(Object.assign(Object.assign({}, req.body), { user: req.body.userId }));
                yield product_model_1.Product.findByIdAndUpdate({ _id: req.body.product }, { $inc: { quantity: -1 } });
                return res.send(cartItem);
            }
        }
    }
    catch (error) {
        return res.send(error);
    }
}));
function Check(dbProduct, qty) {
    if (dbProduct.quantity < qty) {
        return true;
    }
    else {
        return false;
    }
}
cartRouter.delete("/:id", authMiddleWare, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    try {
        let cart = (yield cart_model_1.Cart.findById({
            _id: req.params.id,
        }));
        let product = yield product_model_1.Product.findByIdAndUpdate({ _id: cart.product }, {
            $inc: { quantity: cart.quantity },
        });
        yield cart_model_1.Cart.findByIdAndDelete({ _id: req.params.id });
        return res.send(product);
    }
    catch (error) {
        return res.send(error);
    }
}));
exports.default = cartRouter;
