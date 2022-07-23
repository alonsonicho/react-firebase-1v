import { useState } from "react"
import styles from "../styles/ItemCount.module.css"

const ItemCount = ({stock, inicial, onAdd}) => {

    const [unidades, setUnidades] = useState(inicial)
    const [stockActual, setStockActual] = useState(stock)

    function sumar(){
        setUnidades(unidades+1)
        setStockActual(stockActual-1)
    }

    function restar(){
        setUnidades(unidades-1)
        setStockActual(stockActual+1)
    }


  return (
    <div className={styles.itemCount}>
        <span className={styles.stockActual}>{stockActual > 0 ? <span>{stockActual-1} DISPONIBLES</span> : <span>PRODUCTO AGOTADO</span>}</span><br/>
        <div>
            <button className={styles.buttonMin} onClick={restar} disabled={unidades === 1}>-</button>
            {stock > 0 ? <span className={styles.unidadesAdd}>{unidades}</span> : <span className={styles.unidadesAdd}>0</span>}
            <button className={styles.buttonMax} onClick={sumar} disabled={unidades >= (stock)}>+</button>
        </div>
        {stock > 0 ? <button className={styles.buttonAdd} onClick={() => onAdd(unidades)}>Agregar al carrito</button> : <button className={styles.buttonAdd}>SIN STOCK</button>}
    </div>
  )
}

export default ItemCount;
