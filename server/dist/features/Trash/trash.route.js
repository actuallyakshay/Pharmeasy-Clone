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
const express_1 = require("express");
const product_model_1 = require("../product/product.model");
const trash_model_1 = require("./trash.model");
const trashRouter = (0, express_1.Router)();
trashRouter.get("", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let trashs = yield trash_model_1.Trash.find();
        return res.send(trashs);
    }
    catch (e) {
        return res.send(e);
    }
}));
trashRouter.post("", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield product_model_1.Product.create(req.body);
        yield trash_model_1.Trash.findByIdAndDelete(req.body._id);
        return res.send(product);
    }
    catch (e) {
        return res.send(e);
    }
}));
exports.default = trashRouter;
