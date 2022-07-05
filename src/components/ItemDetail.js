
// import ItemCount from "./ItemCount"


const ItemDetail = ({img, nombre, categoria, stock, precio}) => {

  return (
    <div>
      <img src={require(`../assets/${img}`)} alt={nombre}/>
        <p>{nombre}</p>
        <p>{categoria}</p>
        <p>{precio}</p>
    </div>
  )
}

export default ItemDetail
