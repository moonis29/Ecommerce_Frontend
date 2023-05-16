import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  products: [],
};

export const asyncAddProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (product) => {
    try {
      toast.success("Product Added Successfully");
      return product;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const asyncRemoveProductFromCart = createAsyncThunk(
  "cart/RemoveProductFromCart",
  async (productID, thunkAPI) => {
    try {
      const {
        cart: { products },
      } = thunkAPI.getState();

      const newProducts = products.filter(
        (product) => product.id !== productID
      );

      toast.success("Product Removed Successfully");
      return newProducts;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncAddProductToCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(asyncAddProductToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(asyncRemoveProductFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default cartSlice.reducer;
