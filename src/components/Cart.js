import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import Form from "./Form";
import style from "../styles/Cart.module.css";
import Carrito from "../assets/carrito-de-compras.png"

const Cart = () => {
  const context = useContext(CartContext);

  // State para validar visibilidad del form
  const [isVisible, setIsVisible] = useState(false);
  
  const navigate = useNavigate();

  const activeForm = () => {
    setIsVisible(true);
  };

  // Se ejecuta cuando se envia la data del usuario.
  const removeForm = () => {
    setTimeout(() => {
      setIsVisible(false);
      context.clearCart();
      navigate("/");
    }, 1500);
  };

  return (
    <>
      {context.cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Precio</th>
              <th>Unidades</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {context.cart.map((e) => (
              <CartItem
                key={e.item.id}
                id={e.item.id}
                nombre={e.item.nombre}
                precio={e.item.precio}
                talla={e.item.talle}
                imagen={e.item.img}
                cantidad={e.quantity}
                subtotal={context.subtotal(e.quantity, e.item.precio)}
                removeItem={() => context.removeItem(e.item.id)}
              />
            ))}
            <tr>
              <td colSpan="1">
                <button onClick={context.clearCart} className={style.buttonDeleteCart}>
                  VACIAR CARRITO
                </button>
              </td>
              <td colSpan="3">
                <p className={style.totalInfo}>UNIDADES TOTALES: {context.getQuantity()}</p>
                <p className={style.totalInfo}>PAGO TOTAL: ${context.getTotal()}</p>
                {isVisible === false && (
                  <button className={style.buttonIniciar} onClick={() => activeForm()}>
                    INICIAR PEDIDO
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className={style.divMensaje}>
          <img src={Carrito} alt="carritoCompras"/>
          <h2>!Tu carrito de compras esta vacio!</h2>
          <span>Aun no has agregado productos a tu carrito de compras. Visita nuestra pagina principal y descubre todo lo que tenemos para ti.</span>
          <Link to="/">
            <button>VER PRODUCTOS</button>
          </Link>
        </div>
      )}
      {isVisible && context.cart.length > 0 && <Form props={context} removeForm={removeForm} />}
    </>
  );
};

export default Cart;
