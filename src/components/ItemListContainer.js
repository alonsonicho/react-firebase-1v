 import styles from '../styles/ItemListContainer.module.css'
 import ItemCount from './ItemCount'

const ItemListContainer = ({titulo}) => {

  const onAdd = (cantidad) =>{
    console.log(`SE AGREGO ${cantidad} U`)
  }

  return (
    <div className={styles.itemListContainer}>
      <p>{titulo}</p>
      <div className={styles.prueba}>
        <ItemCount inicial={0} stock={5} onAdd={onAdd}/>
        <ItemCount inicial={0} stock={10} onAdd={onAdd}/>
        <ItemCount inicial={0} stock={7} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default ItemListContainer
