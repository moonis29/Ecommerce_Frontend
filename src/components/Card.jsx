import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Rating,
  Typography,
} from "@mui/material";
import { AspectRatio } from "@mui/joy";
import { asyncAddProductToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { asyncRemoveProductFromCart } from "../redux/features/cartSlice";
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ product, btnType }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      btnType
        ? asyncRemoveProductFromCart(product.id)
        : asyncAddProductToCart(product)
    );
  };

  const slug = product?.title?.replaceAll(" ", "-");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <AspectRatio
        ratio={"1"}
        objectFit={"contain"}
        color={`white`}
        sx={{ padding: 0.5 }}
      >
        <CardMedia component={"img"} image={product?.image} />
      </AspectRatio>
      <CardContent>
        <Link
          underline="none"
          component={RouterLink}
          to={`/product/${slug}?id=${product?.id}`}
        >
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
            gutterBottom
            variant="h6"
          >
            {product?.title}
          </Typography>
        </Link>
        {!btnType ? (
          <Typography>${product?.price.toFixed(2)}</Typography>
        ) : null}
        {
          !btnType ? (
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Rating readOnly value={product?.rating?.rate} />
            <Typography> ( {product?.rating?.count} Ratings ) </Typography>
          </Stack>
          ) : null
        }
      </CardContent>
      <CardActions>
        <Button
          onClick={handleSubmit}
          variant={btnType ? "contained" : "outlined"}
          color={btnType ? "error" : "primary"}
          fullWidth
        >
          {btnType ? "Remove from cart" : "Add to cart"}
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
