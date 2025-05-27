import { Routes, Route } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { Navbar } from "./components/Navbar";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { AuthCallbackPage } from "./pages/AuthCallbackPage";
import { ContactsPage } from "./pages/ContactsPage";
import { Footer } from "./components/Footer";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
      <Footer />
    </>
  );
};
