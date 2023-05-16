import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
// import Product from "./pages/Product";
import SingleProductPage from "./pages/SingleProductPage";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:name" element={<SingleProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;
