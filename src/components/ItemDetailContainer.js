import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import Spinner from "./Spinner"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
        fetch('/data.json')
          .then(resp => resp.json())
          .then(data => {setProducto(data.find(item => item.id === parseInt(id)))
            setIsLoading(false)
          })
      }, 1000);
    }, [id])

  return (
    <>
      {isLoading ? (<Spinner/>) : (<ItemDetail props={producto} key={producto.id}/>)}
    </>
  )
}

export default ItemDetailContainer
