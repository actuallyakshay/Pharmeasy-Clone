"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "product",
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.Cart = (0, mongoose_1.model)("cart", cartSchema);
