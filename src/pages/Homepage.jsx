import React, { Fragment, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchAllProducts } from "../redux/features/homeSlice";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "../components/Card";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(asyncFetchAllProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <Box marginY={2}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} key={product?.id} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Fragment>
  );
};

export default HomePage;
