import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const Cart = () => {
  const { loading, products } = useSelector((state) => state.cart);

  const btnType = window.location.pathname === "/cart";

  const amount = products.reduce((prevItem, currentItem) => {
    return prevItem + parseFloat(currentItem.price);
  }, 0);

  let shippingCharge = 20;

  return (
    <Fragment>
      <Box marginY={2}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} sm={6} md={8}>
              {products.length === 0 ? (
                <Box mx={"auto"}>
                  <img
                    src="./assests/EmptyCart.svg"
                    alt="Empty Cart"
                    width={"60%"}
                  />
                  <Box my={2}>
                    <Typography variant="h5" textAlign={"center"}>
                      {" "}
                      Cart is Empty{" "}
                    </Typography>
                  </Box>
                  <Box mx={"auto"} width={"fit-content"} my={2} mb={3}>
                    <Button
                      LinkComponent={Link}
                      to="/"
                      variant="outlined"
                      sx={{ px: 3, py: 1 }}
                    >
                      {" "}
                      Go To Homepage{" "}
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Grid container spacing={2}>
                  {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <ProductCard
                        product={product}
                        key={product?.id}
                        btnType={btnType}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Card>
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography>Amount</Typography>
                    <Typography variant={"h6"} fontWeight={"bold"}>
                      ${amount.toFixed(2)}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography>Shipping Charges</Typography>
                    <Typography variant={"h6"} fontWeight={"bold"}>
                      ${shippingCharge}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography>Total Amount</Typography>
                    <Typography variant={"h6"} fontWeight={"bold"}>
                      {products.length !== 0
                        ? `$${(amount + shippingCharge).toFixed(2)}`
                        : `$${amount.toFixed(2)}`}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    disabled={products.length === 0 ? true : false}
                  >
                    Pay Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Fragment>
  );
};

export default Cart;
