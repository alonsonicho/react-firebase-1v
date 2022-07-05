import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
 
    useEffect(() => {
      setTimeout(() => {
        fetch('data.json', {
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
          }
        })
        .then(resp => resp.json())
        .then(data => {setProducto(data.filter(item => item.id === 3))
        })
      }, 1000);
    }, [])
    console.log(producto)

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
