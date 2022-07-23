import { useContext, useState } from "react"
import {CartContext} from "./CartContext"
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import style from "../styles/Cart.module.css"
import Form from "./Form"

const Cart = () => {

  const context = useContext(CartContext)
  const [isVisible, setIsVisible] = useState(false)

  const activeForm = () => {
      setIsVisible(true)
  }

  const removeForm = () => {
    setTimeout(() => {
      setIsVisible(false)
    }, 1500);
  }

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
              <button onClick={context.clearCart}>VACIAR CARRITO</button>
            </div>
          </div>
          { isVisible === false ? <button className={style.buttonIniciar} onClick={() => activeForm()}>INICIAR PEDIDO</button> : <h2 className={style.tittle}>FORMULARIO DE CONTACTO</h2>}
      </div>) : (
        <div className={style.divMensaje}>
          <p>NO HAY PRODUCTOS EN SU CARRITO</p>
          <Link to="/"><button>VER PRODUCTOS</button></Link>
        </div>
      )
      }
      { isVisible ? <Form props={context} removeForm={removeForm}/> : <></>}
    </>
  )
}

export default Cart
