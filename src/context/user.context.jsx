import { createContext, useState } from "react";


export const CartContext = createContext({
  setCurrentCart: () => null,
  currentCart: null
})
export const CartProvider = ({children}) => {
  const [currentCart, setCurrentCart] = useState(null)
  const value = {currentCart, setCurrentCart}
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}