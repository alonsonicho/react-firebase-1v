import compra from '../assets/bolso.png'
import styles from '../styles/CartWidgets.module.css'
import { useContext } from "react"
import {CartContext} from "./CartContext"
import {Link} from "react-router-dom"

const CartWidget = () => {

  const context = useContext(CartContext)

  return (
    <div className={styles.containerCart}>
      <Link to="/cart">
        <img className={styles.carroCompra} src={compra} alt="carro-compra" />
        {context.getQuantity()>0 ?
        (<span className={styles.contador}>{context.getQuantity()}</span>) : (<span></span>)
        }
      </Link>
    </div>
  )
}

export default CartWidget
