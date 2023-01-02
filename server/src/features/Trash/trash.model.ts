import mongoose, { Schema, Document, model, ObjectId } from "mongoose";

export interface ITrash extends Document {
  _id: ObjectId;
  image: string;
  name: string;
  price1: number;
  price2: number;
  off: number;
  quantity: number;
  category: string;
  tablet: string;
  ingredients: string;
  company: string;
  testInclude: string;
  ratings: Array<number>;
  reviews: { user_name: string; user_image: string; title: string }[];
  timestamps: Date;
  versionKey: Date;
}

const trashSchema: Schema = new Schema<ITrash>(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Trash = model<ITrash>("trash", trashSchema);
