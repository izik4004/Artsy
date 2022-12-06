
import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import Nav from './components/Nav';
import Newsletter from './components/Newsletter';
import Homepage from './pages/homepage/Index';

function App() {
  return (
    <div className="">
      <Nav/>
      {/* <Header/> */}
        <Homepage/>
      
        <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
