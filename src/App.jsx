import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import ProductList from "./pages/ProductList";
import Admin from "./pages/Admin";
import ProductAdd from "./pages/ProductAdd";
import ProductUpdate from "./pages/ProductUpdate";
import CategoryAdd from "./pages/CategoryAdd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/product/add" element={<ProductAdd />} />
          <Route path="/admin/product/update/:id" element={<ProductUpdate />} />
          <Route path="/admin/category/add" element={<CategoryAdd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
