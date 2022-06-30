import { useState } from "react"
import styles from "../styles/ItemCount.module.css"

const ItemCount = ({stock, inicial, onAdd, id}) => {

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
        <span className={styles.stockActual}>{stockActual} DISPONIBLES</span><br/>
        <div>
            <button className={styles.buttonMin} onClick={restar} disabled={unidades === 0}>-</button>
            <span className={styles.unidadesAdd}>{unidades}</span>
            <button className={styles.buttonMax} onClick={sumar} disabled={unidades > (stock-1)}>+</button>
        </div>
        <button className={styles.buttonAdd} onClick={() => onAdd(unidades)}>AGREGAR</button>
    </div>
  )
}

export default ItemCount;
