
import ItemCount from "./ItemCount"


const ItemDetail = ({props}) => {


  return (
    <div>
      {/* <img src={require(`../assets/${props.img}`)} alt={props.nombre}/> */}
        <p>{props.nombre}</p>
        <p>{props.categoria}</p>
      <ItemCount stock={props.stock} inicial={0}/>
    </div>
  )
}

export default ItemDetail
