 import { useEffect, useState } from 'react'
 import styles from '../styles/ItemListContainer.module.css'
 import ItemList from './ItemList'
 import Spinner from './Spinner'
 import {useParams} from "react-router-dom"
 import {getData, getDataCategory} from "../firebase/Firestore.js"


const ItemListContainer = ({titulo}) => {

  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    setIsLoading(true) 
          // Invocamos funcion getData para obtener el conjunto de datos
          if(idCategoria){
            getDataCategory(idCategoria).then(dataCategory =>{
              setProductos(dataCategory)
              setIsLoading(false)
            })
          }else{
            getData().then(dataAll => {
              setProductos(dataAll)
              setIsLoading(false)
            })
          }
  }, [idCategoria])

  
  return (
    <div className={styles.itemListContainer}>
      <p>{titulo}</p>
      {isLoading ? (<Spinner/>) : (<ItemList productos={productos}/>)}
    </div>
  )
}

export default ItemListContainer