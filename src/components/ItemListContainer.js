 import { useEffect, useState } from 'react'
 import styles from '../styles/ItemListContainer.module.css'
 import ItemList from './ItemList'
 import Spinner from './Spinner'
 import {useParams} from "react-router-dom"

const ItemListContainer = ({titulo}) => {

  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    setIsLoading(true)
      setTimeout(() => {
        fetch('/data.json')
          .then(resp => resp.json())
          .then(data =>
             {
            if(idCategoria){
              setProductos(
                data.filter(
                  producto => producto.categoria === idCategoria
                )
              )
            }else{
              setProductos(data)
            }
            setIsLoading(false)
          })
      }, 1000);
  }, [idCategoria])

  return (
    <div className={styles.itemListContainer}>
      <p>{titulo}</p>
      {isLoading ? (<Spinner/>) : (<ItemList productos={productos}/>)}
    </div>
  )
}

export default ItemListContainer