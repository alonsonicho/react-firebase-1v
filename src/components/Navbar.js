import styles from '../styles/Navbar.module.css';
import logo from '../assets/NH.jpg'
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
            <div>
              <img className={styles.logo} src={logo} alt='logo'/>
              <h1 className={styles.titulo}>Next Hin's</h1>
            </div>
            <div>
              <ul className={styles.ulNav}>
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
