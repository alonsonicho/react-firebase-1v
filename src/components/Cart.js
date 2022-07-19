import { useContext } from "react"
import {CartContext} from "./CartContext"
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import style from "../styles/Cart.module.css"

const Cart = () => {

  const context = useContext(CartContext)

  return (
    <>
      {
      context.cart.length > 0 ?
      (
      <div className={style.container}>
        <div className={style.container2}>
          <div className={style.divInfoImg}>
            <p>Imagen</p>
            <p>Producto</p>
          </div>
          <div className={style.divInfo}>
            <p>Talla</p>
            <p>Precio</p>
            <p>Unidades</p>
            <p>Subtotal</p>
          </div>
          <div className={style.divButton}>
            <p>Eliminar</p>
          </div>
        </div>
        {context.cart.map(e => <CartItem 
              key={e.item.id}
              id={e.item.id}
              nombre={e.item.nombre}
              precio={e.item.precio}
              talla={e.item.talle}
              imagen={e.item.img}
              cantidad={e.quantity}
              subtotal={context.subtotal(e.quantity, e.item.precio)}
              removeItem={()=> context.removeItem(e.item.id)}  
          />)}
          <div className={style.divBotton}>
            <div className={style.divPago}>
              <p>UNIDADES TOTALES: {context.getQuantity()}</p>
              <p>PAGO TOTAL: ${context.getTotal()}</p>
            </div>
            <div className={style.divButton2}>
              <button onClick={() => context.clearCart()}>VACIAR CARRITO</button>
            </div>
          </div>
      </div>) : (
        <div className={style.divMensaje}>
          <p>NO HAY PRODUCTOS EN SU CARRITO</p>
          <Link to="/"><button>VER PRODUCTOS</button></Link>
        </div>
      )
      }
    </>
  )
}

export default Cart
