import {
  Button,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { asyncAddProductToCart } from "../redux/features/cartSlice";

const SingleProductPage = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");

  const [singleProduct, setSingleProduct] = useState({});

  const fetchProducts = async () => {
    const responseObj = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await responseObj.json();
    setSingleProduct(data);
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(asyncAddProductToCart(singleProduct));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Grid container my={5.6} spacing={5} mt={1}>
        <Grid item xs={12} sm={6} md={4} spacing={2}>
          <Stack>
            <img
              src={`${singleProduct.image}`}
              alt={singleProduct.title}
              width={"80%"}
            />
          </Stack>
          <Stack my={3}>
            <Button onClick={handleSubmit} variant={"contained"} color={"primary"}>
              {" "}
              add to cart{" "}
            </Button>
          </Stack>
        </Grid>

        <Grid item my={"auto"} xs={12} sm={6} md={8} spacing={2}>
          <Stack>
            <Typography variant="h4" fontWeight={600}>
              {" "}
              {singleProduct?.title}{" "}
            </Typography>
          </Stack>

          <Stack mt={2}>
            <Typography> {singleProduct?.description} </Typography>
          </Stack>

          <Stack mt={2}>
            <Typography variant="h6" fontWeight={600}>
              {" "}
              Price : ${singleProduct?.price}{" "}
            </Typography>
          </Stack>

          <Stack mt={2} direction={"row"} alignItems={"center"} spacing={2}>
            <Rating value={singleProduct?.rating?.rate} readOnly />
            <Typography>
              {" "}
              ( {singleProduct?.rating?.count} Ratings ){" "}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleProductPage;
