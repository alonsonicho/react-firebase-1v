import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getDataCategory } from "../firebase/Firestore.js";
import styles from "../styles/ItemListContainer.module.css";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Verificacion si el id categoria existe
    if (idCategoria) {
      // Funcion para que traiga los propuctos listados segun su categoria
      getDataCategory(idCategoria).then((dataCategory) => {
        setProductos(dataCategory);
        setIsLoading(false);
      });
    } else {
      // Funcion que devuelve el listado completo de productos
      getData().then((dataAll) => {
        setProductos(dataAll);
        setIsLoading(false);
      });
    }
  }, [idCategoria]);

  return (
    <div className={styles.itemListContainer}>
      <p>{titulo}</p>
      {isLoading ? <Spinner /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
