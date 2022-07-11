import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContext from './components/CartContext';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="BIENVENIDOS"/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer titulo="BIENVENIDOS"/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContext/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
