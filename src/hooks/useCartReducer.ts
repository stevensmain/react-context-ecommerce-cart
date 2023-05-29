import { useReducer } from 'react'
import { CartReducer } from '../reducers/cart'
import { CartProduct, Product } from '../types'
import { CartActionTypes } from '../types/cart'

const initialState: CartProduct[] = []

const useCartReducer = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (product: Product) =>
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: product
    })

  const removeFromCart = (product: Product) =>
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: CartActionTypes.CLEAR_CART
    })

  return { state, addToCart, removeFromCart, clearCart }
}

export default useCartReducer
