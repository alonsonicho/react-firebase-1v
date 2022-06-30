import ItemCount from "./ItemCount"
import styles from "../styles/Item.module.css"

const Item = ({imagen, nombre, talla, precio, stock, id}) => {
  return (
      <div className={styles.containerInfo}>
          <img src={require(`../assets/${imagen}`)} alt={imagen} className={styles.imagen}/>
          <div className={styles.info}>
              <div className={styles.infoInt}>
                  <span>{nombre}</span>
                  <span>${precio}</span>
              </div>
              <ItemCount inicial={0} stock={stock} id={id}/>
          </div>
      </div>
  )
}

export default Item