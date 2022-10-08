import styles from '../styles/Layout.module.scss'
import SideBar from './SideBar'
import ThemeBtn from './ThemeBtn'

const Layout = ({ children }) => {
  return(
    <div>
      <SideBar />
      {/* <ThemeBtn /> */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Layout