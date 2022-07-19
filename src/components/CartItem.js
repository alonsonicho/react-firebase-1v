import style from "../styles/CartItem.module.css"

const CartItem = ({id,nombre,precio,talla,cantidad,imagen,removeItem,subtotal}) => {
  return (
    <div className={style.container}>
        <div className={style.divInfoImg}>
          <img className={style.imagenCart} src={require(`../assets/${imagen}`)} alt={nombre}/>
          <p>{nombre}</p>
        </div>
        <div className={style.divInfo}>
          <p>{talla}</p>
          <p>${precio}</p>
          <p>{cantidad}</p>
          <p>${subtotal}</p>
        </div>
        <div className={style.divButton}>
          <button onClick={() => removeItem(id)}>X</button>
        </div>
    </div>
  )
}

export default CartItem
