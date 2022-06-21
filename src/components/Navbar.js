import '../styles/Navbar.css';
import logo from '../assets/NH.jpg'
import compra from '../assets/bolso.png'

function Navbar() {
  return (
    <header className='navbar'>
      <nav className='nav'>
            <div>
              <img class="logo" src={logo} alt='logo'/>
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
              <img className='carro-compra' src={compra} alt="bolso_compras" />
            </div>
      </nav>
    </header>
  );
}

export default Navbar;