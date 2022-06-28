import { useState } from "react"
import styles from "../styles/ItemCount.module.css"


const ItemCount = ({stock, inicial, onAdd}) => {

    const [unidades, setUnidades] = useState(inicial)
    const [btnSumar, setBtnSumar] = useState(false)
    const [btnRestar, setBtnRestar] = useState(true)
    const [stockActual, setStockActual] = useState(stock)

    function sumar(){
        setBtnRestar(false)
        if(unidades === (stock-1)){
            setBtnSumar(true)
        }
        setUnidades(unidades+1)
        setStockActual(stockActual-1)
    }

    function restar(){
        setBtnSumar(false)
        if(unidades === 1){
            setBtnRestar(true)
        }
        setUnidades(unidades-1)
        setStockActual(stockActual+1)
    }


  return (
    <div className={styles.itemCount}>
        <span className={styles.stockActual}>{stockActual} DISPONIBLES</span><br/>
        <div>
            <button className={styles.buttonMin} onClick={restar} disabled={btnRestar}>-</button>
            <span className={styles.unidadesAdd}>{unidades}</span>
            <button className={styles.buttonMax} onClick={sumar} disabled={btnSumar}>+</button>
        </div>
        <button className={styles.buttonAdd} onClick={() => onAdd(unidades)}>AGREGAR</button>
    </div>
  )
}

export default ItemCount;
