import { Grid } from "@chakra-ui/layout";
import React, { Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IProduct } from "../../@types/IProduct";
import { getProductData } from "../../Redux/Product/product.action";
import ProductComponent from "./ProductComponent";
import Sidebar from "./Sidebar";
import { AppState } from "../../Redux/Store";
import Pegination from "./Pegination";
import Filters from "./Filters/Filters";

export const Healthcare: React.FC = () => {
  const [temp, setTemp] = useState<number>(0);
  const [cat, setCat] = useState<string>("sale");
  const [page, setPage] = useState<number>(1);
  const dispatch: Dispatch<any> = useDispatch();
  const productData: IProduct[] | undefined = useSelector(
    (state: AppState) => state?.productReducer?.productData
  );

  const handleClick = (i: number, el: string): void => {
    setCat(el);
    setTemp(i);
  };

  const handlePage = (val: number): void => {
    setPage((prev: number) => prev + val);
  };

  useEffect(() => {
    dispatch(getProductData(cat, "", page));
  }, [cat, page, dispatch]);

  const handlePriceSort = (sort: string): void => {
    dispatch(getProductData(cat, "", page, sort));
  };

  const handleDiscountSort = (offSort: string): void => {
    dispatch(getProductData(cat, "", page, "", offSort));
  };

  return (
    <>
      <Filters
        handleDiscountSort={handleDiscountSort}
        handlePriceSort={handlePriceSort}
      />
      <Grid
        position={"relative"}
        gridTemplateColumns={{
          base: ".5fr 3fr",
          sm: ".5fr 3fr",
          md: ".7fr 3fr",
          lg: "1fr 3fr",
        }}
        gap={["0", "0", "3", "5"]}
        w={{ base: "100%", sm: "100%", md: "93%", lg: "83%" }}
        m="auto"
        fontFamily={"poppins"}
      >
        <Sidebar temp={temp} handleClick={handleClick} />
        <ProductComponent productData={productData} />
      </Grid>
      <br />
      <Pegination handlePage={handlePage} page={page} />
    </>
  );
};
