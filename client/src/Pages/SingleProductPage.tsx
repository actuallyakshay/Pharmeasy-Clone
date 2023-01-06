import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import { IProduct } from "../@types/IProduct";
import OfferForYou from "../molecules/OfferForYou";
import SingleProduct from "../molecules/SingleProduct";
import SimilerProducts from "../molecules/SimilerProducts";
import ReviewPage from "../molecules/ReviewPage";

const SingleProductPage: React.FC = () => {
  const id = useParams();
  const [product, setProduct] = useState<any>({});
  const [similerProd, setSimilerProd] = useState<IProduct[]>([]);

  const getSingleProduct = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/product/${id.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const category = product?.category;

  const getSimilerProducts = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/product?category=${category}&limit=12`)
      .then((res) => {
        setSimilerProd(res.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    if (!id) {
      return;
    } else {
      getSingleProduct();
    }
  }, [id]);

  useEffect(() => {
    getSimilerProducts();
  }, [category]);

  return (
    <Box w="88%" m="auto" my="4rem">
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr .4fr" }}
        gap={{ base: "2rem", md: "3rem", lg: "4rem" }}
      >
        <Box py="2rem">
          <SingleProduct product={product} />
          <ReviewPage id={product._id} />
          <SimilerProducts data={similerProd} />
        </Box>
        <Box pt="2rem">
          <Text
            color="#4f585e"
            fontSize="15px"
            fontWeight="500"
            fontFamily="poppins"
            mb=".8rem"
          >
            Please add item(s) to proceed
          </Text>
          <Link to="/cart">
            <Button
              w="100%"
              bg="#10847e"
              color="white"
              _hover={{ bg: "#10847e" }}
            >
              view Cart
            </Button>
          </Link>
          <OfferForYou />
        </Box>
      </Grid>
    </Box>
  );
};

export default SingleProductPage;
