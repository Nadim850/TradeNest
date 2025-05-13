import { Routes, Route } from "react-router-dom";

import HomePage from "/src/landingPage/home/HomePage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import NotFound from "./LandingPage/NotFound";
import SupportPage from "./LandingPage/support/SupportPage";
import PricingPage from "./LandingPage/pricing/PricingPage";
import Signup from "./LandingPage/signup/Signup";
import ProductPage from "./LandingPage/product/ProductPage";
import AboutPage from "./LandingPage/about/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
