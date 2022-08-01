import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {getDataProduct} from "../firebase/Firestore.js"
import ItemDetail from "./ItemDetail"
import Spinner from "./Spinner"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
      setIsLoading(true)
        // getDataProduct nos devuelve el objeto con la informacion del producto por ID del useParams y se almacena en el state 
          getDataProduct(id)
          .then((item) => {
            setProducto(item)
            setIsLoading(false)
          })
          .catch((error) => {
            console.log(error)
          })
    }, [id])
  
  return (
    <>
      {isLoading ? (<Spinner/>) : (<ItemDetail props={producto} key={producto.id}/>)}
    </>
  )
}

export default ItemDetailContainer
