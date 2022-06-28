import compra from '../assets/bolso.png'
import styles from '../styles/CartWidgets.module.css'

const CartWidget = () => {
  return (
    <div className={styles.containerCart}>
      <img className={styles.carroCompra} src={compra} alt="carro-compra" />
      <span className={styles.contador}>3</span>
    </div>
  )
}

export default CartWidget
