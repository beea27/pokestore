import React, { createContext, useState } from 'react';

export const Cart = createContext([])

function CartContext({children}) {

  const [pokeCart, setPokeCart] = useState([])

  const addToCart = (poke) => {
      setPokeCart([...pokeCart, poke])
  }

  return (
    <Cart.Provider value={{addToCart, pokeCart}}>
      {children}
    </Cart.Provider>
  )
}

export default CartContext;