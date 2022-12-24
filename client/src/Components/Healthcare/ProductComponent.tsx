import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { IProduct } from "../../@types/IProduct";
import Pegination from "./Pegination";
import SingleProduct from "./SingleProduct";

interface IProps {
  productData: IProduct[] | undefined;
}

const ProductComponent: React.FC<IProps> = ({ productData }) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(2,1fr)",
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      h="full"
      gap="5"
      rowGap={["4", "4", "5", "7"]}
    >
      {productData?.map((el: IProduct, i: number) => {
        return <SingleProduct data={el} key={el._id} />;
      })}
    </Grid>
  );
};

export default ProductComponent;
