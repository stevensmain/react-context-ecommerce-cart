import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { CartContextState } from '../types'

const useCart = () => {
  const context = useContext(CartContext) as CartContextState

  if (!context) {
    throw new Error('The cart provider is not available')
  }

  return context
}

export default useCart
