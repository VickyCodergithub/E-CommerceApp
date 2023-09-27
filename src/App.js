/** @format */

import './App.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Contact } from './pages/contact';
import { Cart } from './pages/cart/cart';
import LoginPage from './pages/LoginPage';
import { ShopContextProvider } from './context/shop-context';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (username, password) => {
    if (username === 'Vicky' && password === 'Vik') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect username or password');
    }
  };
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          {' '}
          {isLoggedIn && <Navbar />}
          <Routes>
            <Route path='/' element={<LoginPage handleLogin={handleLogin} />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
