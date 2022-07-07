import styles from '../styles/Navbar.module.css';
import logo from '../assets/NH.jpg'
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"

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
                  <Link to="">Home</Link>
                </li>
                <li>
                  <Link to="/categoria/poleras">Poleras</Link>
                </li>
                <li>
                  <Link to="/categoria/pantalones">Pantalones</Link>
                </li>
                <li>
                  <Link to="/categoria/gorras">Gorras</Link>
                </li>
              </ul>
            </div>
            <CartWidget/>
      </nav>
    </header>
  );
}

export default Navbar;
