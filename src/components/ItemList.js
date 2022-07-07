import Item from './Item'
import styles from "../styles/ItemList.module.css"

const ItemList = ({productos}) => {

  return (
    <div className={styles.itemList}>
      {productos.map((pro) => 
        <Item
            key={pro.id}
            imagen={pro.img}
            nombre={pro.nombre}
            stock={pro.stock}
            precio={pro.precio}
            talla={pro.talle}
            id={pro.id}
        />
      )}
    </div>
  )
}

export default ItemList