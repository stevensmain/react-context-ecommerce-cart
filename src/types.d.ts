export interface Root {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface CartProduct extends Product {
  quantity: number
}

interface Filters {
  category: string
  minPrice: number
}

interface FiltersContextState {
  filters: Filters
  changeCategory: (category: string) => void
  changeMinPrice: (minPrice: number) => void
}

interface CartContextState {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  clearCart: () => void
}
