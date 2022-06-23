import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer titulo="Bienvenidos a tu tienda virtual"/>
    </div>
  );
}

export default App;
