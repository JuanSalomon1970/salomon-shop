import './App.css';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Contacto from './components/Contacto/Contacto';
import {CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
      </Routes>
  
      </BrowserRouter>
      </CartProvider>
    </div>
  );       
}

export default App;
