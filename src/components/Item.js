import styles from "../styles/Item.module.css"
import {Link} from "react-router-dom"

const Item = ({imagen, nombre, precio, id}) => {
  return (
      <div className={styles.containerInfo}>
          <img src={require(`../assets/${imagen}`)} alt={imagen} className={styles.imagen}/>
          <div className={styles.info}>
              <div className={styles.infoInt}>
                  <span>{nombre}</span>
                  <span>${precio}</span>
              </div>
             <Link to={`/producto/${id}`}>
                <button className={styles.buttonAdd}>
                    Ver mas
                </button>
             </Link>
          </div>
      </div>
  )
}

export default Item