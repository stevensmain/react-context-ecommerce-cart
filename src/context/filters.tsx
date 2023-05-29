import React, { createContext, useState } from 'react'
import { Filters, FiltersContextState } from '../types'

export const FiltersContext = createContext<FiltersContextState | null>(null)

const FilterProvider = ({ children }: React.PropsWithChildren) => {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    minPrice: 0
  })

  const changeCategory = (category: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, category: category }))
  }

  const changeMinPrice = (minPrice: number) => {
    setFilters((prevFilters) => ({ ...prevFilters, minPrice: minPrice }))
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        changeCategory,
        changeMinPrice
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export default FilterProvider
