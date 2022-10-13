import Head from 'next/head'
import styles from '../styles/Layout.module.scss'
import SideBar from './SideBar'
import ThemeBtn from './ThemeBtn'

const Layout = ({ children }) => {
  return(
    <div>
      <Head><title>{"Laxman's Portfolio"}</title></Head>
      <SideBar />
      {/* <ThemeBtn /> */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Layout