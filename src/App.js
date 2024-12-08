import './App.css';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Home/Cart/Cart';
import HomeScreen from './Components/Home/HomeScreen';
import Product from './Components/Home/Product/Product';
import Navbar from './Components/Navbar/navbar';
import {  Routes, Route } from 'react-router-dom';




function App() {

 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    

      <Footer/>
      
    </div>
  );
}

export default App;
