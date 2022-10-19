import Head from 'next/head'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <span className={styles.projectGitSpan}>
        <a href="https://github.com/LaxmanChoudhary/nextjs-portfolio" target="_blank"  rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size='2x'/>
        </a>
      </span>
    </div>
  )
}

export default Layout