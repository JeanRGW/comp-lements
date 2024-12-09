import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import React from "react";

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/produto" element={<ProductPage />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

export default App;
