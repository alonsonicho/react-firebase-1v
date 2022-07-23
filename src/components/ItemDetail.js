import styles from "../styles/itemDetail.module.css"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../components/CartContext"


const ItemDetail = ({props}) => {

  const [isVisible, setIsVisible] = useState(true)
  const [cantidad, setCantidad] = useState(0)

  const {addItems} = useContext(CartContext)

  const onAdd = (unidades) => {
    setIsVisible(false)
    setCantidad(unidades)
    addItems(props,unidades)
  }

  console.log(cantidad)

  return (
    <div className={styles.container}>
      <img className={styles.img} src={require(`../assets/${props.img}`)} alt={props.nombre}/>
      <div>
        <p className={styles.nombre}>{props.nombre}</p>
        <p className={styles.precio}>Precio: ${props.precio}</p>
        <p className={styles.talla}>Talla: {props.talle}</p>

        <div className={styles.contenedorButtons}>
          {
            isVisible ? 
            (<ItemCount stock={props.stock} inicial={1} onAdd={onAdd}/>) 
            : (<Link to="/cart"><button className={styles.buttonEnd}>Finalizar Compra</button></Link>)
          }
        </div>

        <p>DESCRIPCION:</p>
        <p className={styles.description}>{props.descripcion}</p>
      </div>
    </div>
  )
}

export default ItemDetail
