import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import Newsletter from './components/Newsletter';
import Homepage from "./pages/homepage/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./pages/marketplace/ProductDetail";
import MarketPlace from "./pages/marketplace/MarketPlace";
import PaymentCheckout from "./pages/checkout/PaymentCheckout";
import ErrorPage from "./pages/ErrorPage";
import Auction from "./pages/auction/Auction";
import Drops from "./pages/drops/Drops";
import { ShopProvider } from "./context/ShopContext";
import { products } from "./data/data";
import LiveAuction from "./pages/auction/LiveAuction";
import io from "socket.io-client"
import ShippingDetails from "./pages/checkout/ShippingDetails";
import PaymentDetails from "./pages/checkout/PaymentDetails";

function App() {
const socket = io.connect("http://localhost:3001");


  return (
    <div className="app">
      <ShopProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/drop" element={<Drops />} />
          <Route 
          path="/marketplace/:id" element={<ProductDetail />} />
          <Route path="/auctions" element={<Auction />} />
          <Route path="/checkout" element={<PaymentCheckout/>} />
          <Route path="/shipping-details" element={<ShippingDetails/>} />
          <Route path="/payment-details" element={<PaymentDetails/>} />
          <Route path="/livebid/:id" element={<LiveAuction socket={socket}/>} />
        </Routes>
        <Footer />
      </Router>
      </ShopProvider>
    </div>
  );
}

export default App;
