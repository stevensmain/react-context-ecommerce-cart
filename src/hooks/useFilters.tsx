import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { FiltersContextState, Product } from '../types'

const useFilters = () => {
  const { filters, changeCategory, changeMinPrice } = useContext(
    FiltersContext
  ) as FiltersContextState

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category)
      )
    })
  }

  return { filters, filterProducts, changeCategory, changeMinPrice }
}

export default useFilters
