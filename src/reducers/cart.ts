import { CartProduct, Product } from '../types'
import { CartAction, CartActionTypes } from '../types/cart'

export const CartReducer = (state: CartProduct[], action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const { id } = action.payload as Product
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1

        return [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1
          },
          ...state.slice(productInCartIndex + 1)
        ]
      }

      return [...state, { ...action.payload, quantity: 1 }]
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      const { id } = action.payload as Product
      return state.filter((item) => item.id !== id)
    }

    case CartActionTypes.CLEAR_CART: {
      return []
    }
  }

  return state
}
