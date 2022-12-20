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
import Zi from "./components/Zi";
// import { ShopContextProvider } from "./context/ShopContext";
import { products } from "./data/data";


function App() {

//Step 2 :
const [CartItem, setCartItem] = useState([])

//Step 4 :
const addToCart = (product) => {
  // if hamro product alredy cart xa bhane  find garna help garxa
  const productExit = CartItem.find((item) => item.id === product.id)
  // if productExit chai alredy exit in cart then will run fun() => setCartItem
  // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
  // gayara check garxa if item.id ra product.id chai match bhayo bhane
  // productExit product chai display garxa
  // ani increase  exits product QTY by 1
  // if item and product doesnt match then will add new items
  if (productExit) {
    setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
  } else {
    // but if the product doesnt exit in the cart that mean if card is empty
    // then new product is added in cart  and its qty is initalize to 1
    setCartItem([...CartItem, { ...product, qty: 1 }])
  }
}

// Stpe: 6
const decreaseQty = (product) => {
  // if hamro product alredy cart xa bhane  find garna help garxa
  const productExit = CartItem.find((item) => item.id === product.id)

  // if product is exit and its qty is 1 then we will run a fun  setCartItem
  // inside  setCartItem we will run filter to check if item.id is match to product.id
  // if the item.id is doesnt match to product.id then that items are display in cart
  // else
  if (productExit.qty === 1) {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  } else {
    // if product is exit and qty  of that produt is not equal to 1
    // then will run function call setCartItem
    // inside setCartItem we will run map method
    // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
    setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  }
}




  return (
    <div className="app">
      {/* <ShopContextProvider> */}
      <Router>
        <Header CartItem={CartItem}/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/drop" element={<Drops />} />
          <Route path="/products/:id" element={<ProductDetail CartItem={CartItem} products={products} addToCart={addToCart} decreaseQty={decreaseQty}/>} />
          <Route path="/auctions" element={<Auction />} />
          <Route path="/checkout" element={<PaymentCheckout  CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>} />
          <Route path="/zik" element={<Zi />} />
        </Routes>
        <Footer />
      </Router>
      {/* </ShopContextProvider> */}
    </div>
  );
}

export default App;
