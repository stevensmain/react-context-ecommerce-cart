import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'
import useCart from '../../hooks/useCart'

import styles from './Cart.module.scss'

const Cart = () => {
  const { cart, clearCart, addToCart } = useCart()
  const cartChecBoxId = useId()

  return (
    <>
      <label className={styles.cart_button} htmlFor={cartChecBoxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartChecBoxId} hidden />
      <aside className={styles.cart}>
        <ul>
          {cart.map((cartItem) => (
            <Cart.Item
              key={cartItem.id}
              addToCart={() => addToCart(cartItem)}
              {...cartItem}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

interface ItemProps {
  thumbnail: string
  title: string
  price: number
  quantity: number
  addToCart: () => void
}

const Item = ({ thumbnail, title, price, quantity, addToCart }: ItemProps) => {
  return (
    <li>
      <img src={thumbnail} alt={`${title} image`} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

Cart.Item = Item

export default Cart
