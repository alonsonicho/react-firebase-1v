import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import ItemCount from "./ItemCount";
import styles from "../styles/itemDetail.module.css";

const ItemDetail = ({ props }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  const { addItems } = useContext(CartContext);

  const onAdd = (unidades) => {
    setIsVisible(false);
    setCantidad(unidades);
    // Envio del item enviado al context 
    addItems(props, unidades);
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={props.img} alt={props.nombre} />
      <div>
        <p className={styles.nombre}>{props.nombre}</p>
        <p className={styles.precio}>Precio: ${props.precio}</p>
        <p className={styles.talla}>Talla: {props.talle}</p>
        <div className={styles.contenedorButtons}>
          {isVisible ? (
            <ItemCount stock={props.stock} inicial={cantidad} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
              <button className={styles.buttonEnd}>Finalizar Compra</button>
            </Link>
          )}
        </div>
        <p className={styles.description}>DESCRIPCION:</p>
        <p className={styles.description}>{props.descripcion}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
