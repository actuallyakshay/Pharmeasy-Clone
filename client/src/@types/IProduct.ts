export interface IProduct {
  _id: string;
  image?: string;
  name?: string;
  price1: number;
  price2: number;
  off?: number;
  quantity?: number;
  category: string;
  tablet?: string;
  ingredients?: string;
  company?: string;
  testInclude?: string;
  ratings?: Array<number>;
  reviews?: { user_name: string; user_image: string; title: string }[];
  timestamps?: Date;
  versionKey?: Date;
}

export interface IProductReducer {
  productLoading?: boolean;
  productError?: boolean;
  productData?: IProduct[];
}

