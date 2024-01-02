import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Checkout from './page/Checkout';
import Authentication from './page/Authentication';
import Profile from './page/Profile';
import Cart from './page/CArt';
import Product from './page/Product';

const App=() => {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart/checkout' element={<Checkout/>} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>
    </div>
  );
}

export default App;
