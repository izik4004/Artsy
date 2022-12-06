import "./App.css";
import Footer from "./components/Footer";
// import Header from './components/Header';
import Nav from "./components/Nav";
// import Newsletter from './components/Newsletter';
import Homepage from "./pages/homepage/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./pages/marketplace/ProductDetail";

function App() {
  return (
    <div className="">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/product_detail" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
