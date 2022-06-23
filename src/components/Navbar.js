import '../styles/Navbar.css';
import logo from '../assets/NH.jpg'
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header className='navbar'>
      <nav className='nav'>
            <div>
              <img className="logo" src={logo} alt='logo'/>
              <h1 className='titulo'>Next Hin's</h1>
            </div>
            <div>
              <ul className='ulNav'>
                <li>
                  <a href='?'>Home</a>
                </li>
                <li>
                  <a href="?">Tienda</a>
                </li>
                <li>
                  <a href="?">Contacto</a>
                </li>
              </ul>
            </div>
            <CartWidget/>
      </nav>
    </header>
  );
}

export default Navbar;