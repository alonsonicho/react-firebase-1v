import { useState } from "react"
import { insertDataOrder, updateStockProduct } from "../firebase/Firestore.js"
import style from "../styles/Form.module.css"
import Swal from "sweetalert2";

const Form = ({props, removeForm}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const nameHandler = (event => {
        setName(event.target.value)
    })

    const phoneHandler = (event => {
        setPhone(event.target.value)
    })

    const emailHandler = (event => {
        setEmail(event.target.value)
    })
    
  const submitHandler = (event) => {
      event.preventDefault()

      const newBuyer = {
          name: name,
          phone: phone,
          email: email
      }

      const order = {
          buyer: newBuyer,
          items: props.cart,
          date: Date(),
          total: props.getTotal()
      }

      // Funcion para insertar la order en la collection
      // Recibe como parametro la order y la funcion para que imprima la orden con el id generado
      insertDataOrder(order, imprimirOrden)

      // Actualizar stock del producto
      const id = order.items.map(data => data.item.id);
      const newStock = order.items.map(data => data.item.stock - data.quantity);
      for(let i=0; i<id.length; i++){
        updateStockProduct(id[i], newStock[i])
      }

      //  Reset de los state y el cart de productos
      setName("");
      setPhone("");
      setEmail("");

      // Remueve el form cuando se envia la data del usuario
      removeForm();
  }

    // Funcion para la impresion de alerta con id order
    const imprimirOrden = (id) => {
      Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra',
        text: `ID COMPRA : ${id}`
      }) 
    }

  return (
      <form onSubmit={submitHandler}>
        <h2 className={style.tittle}>FORMULARIO DE CONTACTO</h2>
        <div>
          <label>Nombres :</label>
          <input type="text" value={name} name="name" onChange={nameHandler} required/>
        </div>
        <div>
        <label>Telefono :</label>
          <input type="text" value={phone} name="phone" onChange={phoneHandler} required/>
        </div>
        <div>
          <label>Email :</label>
          <input type="text" value={email} name="email" onChange={emailHandler} required/>
        </div>
        <div>
          <input className={style.button} type="submit"/>
        </div>
      </form>
  )
}

export default Form
