import "./App.css";
import Footer from "./components/Footer";
// import Header from './components/Header';
import Nav from "./components/Nav";
// import Newsletter from './components/Newsletter';
import Homepage from "./pages/homepage/Index";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { ProductDetail } from "./pages/marketplace/ProductDetail";
import MarketPlace from "./pages/marketplace/MarketPlace";
import PaymentCheckout from "./pages/checkout/PaymentCheckout";
import ErrorPage from "./pages/ErrorPage";



const Layout = () => {
  return (
    <div className="app">
      <Nav/>
      <Outlet/>
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/marketplace",
        element: <MarketPlace/>,
      },
      {
        path: "/products/:id",
        element: <ProductDetail/>,
      },
      {
        path: "/checkout",
        element: <PaymentCheckout/>,
      },
      {
        path: "/",
        // element: <ErrorPage />,
        errorElement: <ErrorPage/>,
      },
    ]
  },
 
]);


function App() {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
