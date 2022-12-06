
import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import Nav from './components/Nav';
import Homepage from './pages/homepage/Index';

function App() {
  return (
    <div className="">
      <Nav/>
      {/* <Header/> */}
        <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
