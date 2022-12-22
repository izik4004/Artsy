import React, { createContext, useState } from 'react'
import { products } from '../data/data';

export const CartContext = createContext({
  items: [],
  getItemQuantity: () => {},
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  getTotalCost:() => {}
});

export const ShopProvider = (props) => {
  const [cartItems, setCartItems] = useState([])
  
  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id) {
   setCartItems(currItems => {
    if (currItems.find(item => item.id === id) == null) {
      return [...currItems, {id, quantity:1}]
    } else {
      return currItems.map(item => {
        if(item.id === id) {
          return {...item, quantity:item.quantity + 1}
        } else {
          return item
        }
      })
    }
   })
  }

  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
     if (currItems.find(item => item.id === id)?.quantity === 1) {
       return currItems.filter(item => item.id !== id)
     } else {
       return currItems.map(item => {
         if(item.id === id) {
           return {...item, quantity:item.quantity - 1}
         } else {
           return item
         }
       })
     }
    })
   }
  
  function removeFromCart(id){
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  function getTotalCost(){}

  const contextvalue = {
    items: cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getTotalCost
  }
    return (
    <CartContext.Provider value={contextvalue}>{props.children}</CartContext.Provider>
  )
}

export default ShopProvider