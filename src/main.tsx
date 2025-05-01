import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ClickedIconProvider from "./context/ClickedIcon";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClickedIconProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ClickedIconProvider>
  </StrictMode>,
);
