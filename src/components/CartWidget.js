import compra from '../assets/bolso.png'
import '../styles/CartWidgets.css'

const CartWidget = () => {
  return (
    <div className="container-Cart">
      <img className="carro-compra" src={compra} alt="carro-compra" />
      <span className="contador">3</span>
    </div>
  )
}

export default CartWidget
