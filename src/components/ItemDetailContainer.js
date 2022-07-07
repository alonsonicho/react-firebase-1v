import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {idProd} = useParams()
    
    useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
        fetch('data.json')
          .then(resp => resp.json())
          .then(data => {setProducto(data.find(item => item.id === parseInt(idProd)))
          .catch(err => console.log(err))
          })
      }, 1000);
      setIsLoading(false)
    }, [idProd])
    console.log(producto)

  return (
    <>
      {isLoading ? (<h1>Loading ...</h1>) : (<ItemDetail props={producto} key={producto.id}/>)}
    </>
  )
}

export default ItemDetailContainer
