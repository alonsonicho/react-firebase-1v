import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./components/CartContext"
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer titulo="BIENVENIDOS"/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer titulo="BIENVENIDOS"/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
