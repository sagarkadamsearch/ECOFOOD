import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Order from "./Order";
import { Login } from "../Component/H/Login";
import PrivateRoutes from "./PrivateRoutes";
import SingleCardPage from "../Component/S/SingleCardPage";
import { SignUp } from "../Component/H/Signup";
import ProductList from "../Component/ProductList";
import { CartPage } from "../Component/H/CartPage";
import Payment from "../Component/S/Payment/Payment";


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/product' element={<Products/>}/> */}
        <Route path="/product" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/order"
          element={
              <Order />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cartPage"
          element={
            <PrivateRoutes>
              <CartPage />
            </PrivateRoutes>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/singlePage/:id" element={<SingleCardPage />} />
      </Routes>
    </div>
  );
}
