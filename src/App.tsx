import { useState } from 'react'
import { products as InitialProps, limit } from './mocks/products.json'
import { Product } from './types'

import Products from './components/Products/Products'
import Header from './components/Header/Header'
import useFilters from './hooks/useFilters'
import Cart from './components/Cart/Cart'
import CartProvider from './context/cart'

function App() {
  const [products] = useState<Product[]>(InitialProps)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} limit={limit} />
    </CartProvider>
  )
}

export default App
