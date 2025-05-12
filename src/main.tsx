import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ClickedIconProvider from "./context/ClickedIcon";
import ProductsPage from "./pages/ProductsPage";
import ScrollTo from "./components/ScrollTo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClickedIconProvider>
      <BrowserRouter>
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </ClickedIconProvider>
  </StrictMode>,
);
