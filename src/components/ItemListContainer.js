 import { useEffect, useState } from 'react'
 import styles from '../styles/ItemListContainer.module.css'
 import ItemList from './ItemList'

const ItemListContainer = ({titulo}) => {

  const [productos, setProductos] = useState([])
 
  useEffect(() => {
      setTimeout(() => {
        fetch('data.json')
        .then(resp => resp.json())
        .then(data => setProductos(data))
      }, 2000);
  }, [])

  return (
    <div className={styles.itemListContainer}>
      <p>{titulo}</p>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer