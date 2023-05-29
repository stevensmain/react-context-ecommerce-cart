import { AddToCartIcon } from '../Icons'
import { Product } from '../../types'
import styles from './Products.module.scss'
import useCart from '../../hooks/useCart'

interface Props {
  products: Product[]
  limit: number
}

const Products = ({ products, limit }: Props) => {
  const { addToCart, cart } = useCart()

  return (
    <main className={styles.products}>
      <ul>
        {products.slice(0, limit).map((product) => {
          const isInCart = cart.findIndex((item) => item.id === product.id)

          return (
            <Products.Item
              key={product.id}
              isInCart={isInCart >= 0}
              addToCart={() => addToCart(product)}
              {...product}
            />
          )
        })}
      </ul>
    </main>
  )
}

interface ItemProps {
  thumbnail: string
  title: string
  price: number
  isInCart: boolean
  addToCart: () => void
}

const Item = ({ thumbnail, title, price, addToCart }: ItemProps) => {
  return (
    <li>
      <img src={thumbnail} alt={`${title} image`} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <div>
        <button onClick={addToCart}>
          <AddToCartIcon />
        </button>
      </div>
    </li>
  )
}

Products.Item = Item

export default Products
