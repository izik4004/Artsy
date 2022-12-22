import React, { createContext, useState } from 'react'
import { products } from '../data/data';

export const CartContext = createContext();

export function useShoppingCart(){

}

export const ShopContext = (props) => {
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
    setCartItems()
   }
  return (
    <ShopContext.Provider value={{getItemQuantity, decreaseCartQuantity, increaseCartQuantity}}>{props.children}</ShopContext.Provider>
  )
}

