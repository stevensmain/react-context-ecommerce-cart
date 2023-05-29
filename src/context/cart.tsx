import { createContext } from 'react'
import { CartContextState } from '../types'
import useCartReducer from '../hooks/useCartReducer'

export const CartContext = createContext<CartContextState | null>(null)

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
