import style from "../styles/CartItem.module.css";

const CartItem = ({ id, nombre, precio, talla, cantidad, imagen, removeItem, subtotal }) => {
  return (
    <tr>
      <td className={style.containerData}>
        <img className={style.imagenCart} src={imagen} alt={nombre} />
        <div className={style.spanData}>
          <span>{nombre}</span>
          <span>Talla : {talla}</span>
          <span>
            <button onClick={() => removeItem(id)} className={style.buttonRemoveItem}>
              Eliminar
            </button>
          </span>
        </div>
      </td>
      <td>
        <p>${precio}</p>
      </td>
      <td>
        <p>{cantidad}</p>
      </td>
      <td>
        <p>${subtotal}</p>
      </td>
    </tr>
  );
};

export default CartItem;
