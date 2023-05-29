import { useId } from 'react'
import styles from './Filters.module.scss'
import useFilters from '../../hooks/useFilters'

const Filters = () => {
  const { changeCategory, changeMinPrice } = useFilters()
  const priceFilterId = useId()
  const categoryFilterId = useId()

  return (
    <section className={styles.filters}>
      <div className={styles.filter}>
        <label htmlFor={priceFilterId}>Price</label>
        <input
          type="number"
          name="minPrice"
          id={priceFilterId}
          placeholder="Min"
          onChange={(e) => changeMinPrice(Number(e.target.value))}
        />
      </div>

      <div className={styles.filter}>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={(e) => changeCategory(e.target.value)}
        >
          <option value="all">All</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
