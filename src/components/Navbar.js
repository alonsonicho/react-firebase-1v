import { Link, NavLink } from "react-router-dom";
import logo from "../assets/NH.jpg";
import CartWidget from "./CartWidget";
import styles from "../styles/Navbar.module.css";

function Navbar() {

  let activeStyle = {
    backgroundColor: "#DFDFDE",
    color: "black"
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div>
          <Link  to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <h1 className={styles.titulo}>Next Hin's</h1>
        </div>
        <div>
          <ul className={styles.ulNav}>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/categoria/poleras">Poleras</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/categoria/pantalones">Pantalones</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/categoria/gorras">Gorras</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Navbar;
