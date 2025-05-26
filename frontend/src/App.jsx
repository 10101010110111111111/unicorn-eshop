import { Routes, Route } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};
