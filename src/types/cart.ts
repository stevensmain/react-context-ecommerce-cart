import { Product } from '../types'

export enum CartActionTypes {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
}

export type CartAction =
  | { type: CartActionTypes.REMOVE_FROM_CART; payload: Product }
  | { type: CartActionTypes.CLEAR_CART }
  | { type: CartActionTypes.ADD_TO_CART; payload: Product }
