import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ScrollTo from "./components/ScrollTo";
import CartProductPage from "./pages/CartProductPage";
import WishlistPage from "./pages/WishlistPage";
import Tes from "./components/tes";
import MenusPage from "./pages/MenusPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/menu" element={<MenusPage />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
