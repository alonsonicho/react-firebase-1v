import React from 'react'
// import { children } from 'react'
import { createContext, useState } from 'react'


export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue=[], children}) => {

    const [cart, setCart] = useState(defaultValue)

    const clearCart = () => {
        setCart([])
    }
 
    const addItems = (item, quantity) => {
        console.log(item)
        if(isInCart(item.id)){
            const newCart = [...cart]
            for(const element of newCart){
                if(element.item.id === item.id){
                    element.quantity = element.quantity+quantity;
                }
            }
            setCart(newCart)
        }else{
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity:quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        return cart.some((element) => element.item.id === id)
    }

    const removeItem = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id)
        setCart(newCart)
    }

    const getQuantity = () => {
        let cantidad = 0;
        cart.forEach((element) => cantidad = cantidad+element.quantity)
        return cantidad;
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach((element) => {
            total = total+(element.quantity * element.item.precio)
        })
        return total;
    }

    const subtotal = (quantity,precio) =>{
        let subtotal = quantity*precio;
        return subtotal;
    }

    const context = {
        cart,
        clearCart,
        addItems,
        removeItem,
        getQuantity,
        getTotal,
        subtotal
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}
