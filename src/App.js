import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/categoria/:cat" element={<ItemListContainer titulo="BIENVENIDOS"/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
