"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trash = void 0;
const mongoose_1 = require("mongoose");
const trashSchema = new mongoose_1.Schema({
    image: String,
    name: String,
    price1: Number,
    price2: Number,
    off: Number,
    quantity: Number,
    category: String,
    tablet: String,
    ingredients: String,
    company: String,
    testInclude: String,
    ratings: [],
    reviews: [
        {
            user_name: String,
            user_image: String,
            title: String,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
exports.Trash = (0, mongoose_1.model)("trash", trashSchema);
