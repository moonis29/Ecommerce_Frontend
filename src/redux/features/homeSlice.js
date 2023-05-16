import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
};

export const asyncFetchAllProducts = createAsyncThunk(
  "home/fetchAllProducts",
  async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(asyncFetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default homeSlice.reducer;
