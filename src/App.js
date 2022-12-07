import "./App.css";
// import Footer from "./components/Footer";
// import Header from './components/Header';
import Nav from "./components/Nav";
// import Newsletter from './components/Newsletter';
import Homepage from "./pages/homepage/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./pages/marketplace/ProductDetail";
import MarketPlace from "./pages/marketplace/MarketPlace";
import PaymentCheckout from "./pages/checkout/PaymentCheckout";

function App() {
  return (
    <div className="">
     
      <Router>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/product_detail" element={<ProductDetail />} />
          <Route path="/marketplace" element={<MarketPlace/>} />
          <Route path="/paymentcheckout" element={<PaymentCheckout/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
