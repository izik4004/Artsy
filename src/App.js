
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Homepage from './pages/homepage/Index';

function App() {
  return (
    <div className="">
      <Nav/>
        <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
