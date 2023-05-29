import Filters from '../Filters/Filters'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>E-COMMERCE</h1>
      <Filters />
    </header>
  )
}

export default Header
