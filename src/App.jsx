import './App.css';
import Navbar from './component/navbar';
import Home from './pages/home';
import Categories from './pages/categories';
import Partners from './pages/partners';
import About from './pages/about';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Cart from './pages/cart';
function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
   
  );
}

export default App;
